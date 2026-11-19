import { Link, useSearchParams } from "react-router";

import { POSTS_PER_PAGE, formatDate, posts } from "../data/posts.js";
import "./Posts.css";

// Lista de posts em grade, 6 por página.
// A página atual fica no endereço: /posts?pagina=2
export default function Posts() {
  const [searchParams] = useSearchParams();

  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const requested = Number(searchParams.get("pagina")) || 1;
  const page = Math.min(Math.max(1, requested), totalPages);

  const start = (page - 1) * POSTS_PER_PAGE;
  const pagePosts = posts.slice(start, start + POSTS_PER_PAGE);

  return (
    <div className="posts">
      <h1>Posts</h1>

      <ul className="posts__grid">
        {pagePosts.map((post) => (
          <li key={post.slug}>
            <Link to={`/posts/${post.slug}`} className="post-card">
              {post.image && (
                <img
                  src={post.image}
                  alt=""
                  className="post-card__image"
                  style={{ objectPosition: post.imagePosition }}
                />
              )}
              <div className="post-card__body">
                <h2 className="post-card__title">{post.title}</h2>
                <p className="post-card__excerpt">{post.subtitle}</p>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <Pagination page={page} totalPages={totalPages} />
    </div>
  );
}

function Pagination({ page, totalPages }) {
  const pageLink = (n) => (n === 1 ? "/posts" : `/posts?pagina=${n}`);
  const numbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="pagination" aria-label="Páginas">
      {page > 1 ? (
        <Link to={pageLink(page - 1)}>← Anterior</Link>
      ) : (
        <span className="pagination__disabled">← Anterior</span>
      )}

      {numbers.map((n) =>
        n === page ? (
          <span key={n} className="pagination__current" aria-current="page">
            {n}
          </span>
        ) : (
          <Link key={n} to={pageLink(n)}>
            {n}
          </Link>
        ),
      )}

      {page < totalPages ? (
        <Link to={pageLink(page + 1)}>Próxima →</Link>
      ) : (
        <span className="pagination__disabled">Próxima →</span>
      )}
    </nav>
  );
}
