import { createContext, useContext, useEffect, useReducer } from "react";

const PostsContext = createContext();

const initialState = {
  posts: [],
  selectedPost: {},
  //   idle, loading, ready
  status: "idle",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, status: "loading", selectedPost: {} };
    case "getPosts":
      return {
        ...state,
        posts: action.payload,
        status: "ready",
      };
    case "idle":
      return { ...state, status: "idle" };
    case "post/create":
      return { ...state, posts: [...state.posts, action.payload] };
    case "post/delete":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case "getPost":
      return { ...state, selectedPost: action.payload, status: "ready" };
    default:
      throw new Error("Unknown Action!");
  }
}

function PostsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function getPosts() {
      try {
        dispatch({ type: "loading" });
        const res = await fetch(`http://localhost:8000/posts`, {
          signal,
        });
        if (!res.ok) throw new Error(`Error: ${res.statusText}`);
        const data = await res.json();
        console.log(data);
        dispatch({ type: "getPosts", payload: data });
      } catch (error) {
        console.log(error);
      }
    }

    getPosts();

    return () => controller.abort();
  }, []);

  const { posts, selectedPost, status } = state;

  async function getPost(id) {
    try {
      dispatch({ type: "loading" });
      const res = await fetch(`http://localhost:8000/posts/${id}`);
      if (!res.ok) throw new Error(`Error: ${res.statusText}`);

      const data = await res.json();
      dispatch({ type: "getPost", payload: data });
    } catch (error) {
      console.log(error);
    }
  }

  async function addPost(newPost) {
    try {
      const res = await fetch(`http://localhost:8000/posts`, {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "post/create", payload: data });
    } catch (error) {
      console.log(error);
    }
  }

  async function deletePost(id) {
    try {
      await fetch(`http://localhost:8000/posts/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "post/delete", payload: id });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <PostsContext.Provider
      value={{
        posts,
        status,
        getPost,
        addPost,
        selectedPost,
        deletePost
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

function usePosts() {
  const context = useContext(PostsContext);
  return context;
}

export { PostsProvider, usePosts };
