import { createContext, useContext, useEffect, useReducer } from "react";

const PostsContext = createContext();

const initialState = {
  posts: [],
  //   idle, loading, ready
  status: "idle",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, status: "loading" };
    case "getPosts":
      return { ...state, posts: action.payload, status: "ready" };
    case "idle":
      return { ...state, status: "idle" };
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

  const { posts, status } = state;

  return (
    <PostsContext.Provider
      value={{
        posts,
        status,
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
