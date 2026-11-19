import { Navigate, Route, Routes } from "react-router";

import Header from "./components/Header.jsx";
import Consultoria from "./pages/Consultoria.jsx";
import Home from "./pages/Home.jsx";
import Post from "./pages/Post.jsx";
import Posts from "./pages/Posts.jsx";
import "./App.css";

function NotFound() {
  return <h1>Page not found</h1>;
}

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consultoria" element={<Consultoria />} />
          <Route path="/about" element={<Navigate to="/consultoria" replace />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:slug" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
