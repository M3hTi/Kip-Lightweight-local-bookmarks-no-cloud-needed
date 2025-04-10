import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { AuthProvider } from "./contexts/AuthContext";
import NotFound from "./pages/NotFound";
import AddPost from "./components/AddPost";
import Posts from "./components/Posts";
import { PostsProvider } from "./contexts/PostsContext";

function App() {
  return (
    <>
      <AuthProvider>
        <PostsProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/app" element={<AppLayout />}>
                <Route index element={<Navigate to="posts" replace />} />
                <Route path="add" element={<AddPost />} />
                <Route path="posts" element={<Posts />} />
              </Route>
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </PostsProvider>
      </AuthProvider>
    </>
  );
}

export default App;
