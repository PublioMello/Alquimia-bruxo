import { Link, useParams } from "react-router";

import { formatDate, getBlocks, getPost } from "../data/posts.js";
import "./Posts.css";

// Página de um post inteiro. O slug vem do endereço: /posts/:slug
export default function Post() {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) {
    return (
      <div className="post">
        <p>Post não encontrado.</p>
        <Link to="/posts">← Voltar para os posts</Link>
      </div>
    );
  }

  return (
    <article className="post">
      <Link to="/posts" className="post__back">
        ← Voltar para os posts
      </Link>

      <h1 className="post__title">{post.title}</h1>
      <time dateTime={post.date}>{formatDate(post.date)}</time>

      {post.image && <img src={post.image} alt="" className="post__image" />}

      {post.subtitle && <p className="post__subtitle">{post.subtitle}</p>}

      <div className="post__body">
        {getBlocks(post).map((block, i) =>
          block.type === "heading" ? (
            <h2 key={i}>{block.text}</h2>
          ) : (
            <p key={i}>{block.text}</p>
          ),
        )}
      </div>
    </article>
  );
}
