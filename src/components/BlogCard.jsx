import { Link } from 'react-router-dom'
import { ArrowRight } from './Icons.jsx'
import { formatDate } from '../lib/blogData.js'

// One blog post card. `showExcerpt` is false on compact lists.
export default function BlogCard({ post, showExcerpt = true }) {
  const href = `/blog/${post.slug}`
  return (
    <article className="blog-card">
      <Link to={href} className="blog-card__img" aria-label={post.title}>
        <img src={post.image} alt={post.imageAlt} loading="lazy" width="640" height="400" />
        <span className="blog-card__cat">{post.category}</span>
      </Link>
      <div className="blog-card__body">
        <p className="blog-meta">
          <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readMins} min read
        </p>
        <h3><Link to={href}>{post.title}</Link></h3>
        {showExcerpt && <p className="blog-card__excerpt">{post.excerpt}</p>}
        <Link to={href} className="blog-card__link">
          Read article <ArrowRight />
        </Link>
      </div>
    </article>
  )
}
