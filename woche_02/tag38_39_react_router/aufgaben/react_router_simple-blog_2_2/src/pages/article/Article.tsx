import { useParams } from "react-router"
import ErrorPage from "../errorPage/ErrorPage"
import { blogData } from "../../data/data"
import "./Article.css"

export default function Article() {
  const { articleId } = useParams()
  if (!articleId) {
    return <ErrorPage />
  }

  const blogEntry = blogData.find((entry) => String(entry.id) === articleId)

  if (!blogEntry) {
    return <ErrorPage />
  }

  return (
    <>
      <section className="section_article">
        <div className="article_img">
          <img src={blogEntry.img_url} alt={blogEntry.title} />
        </div>
        <div className="article_text">
          <div className="wrapper_title">
            <h2>{blogEntry.title}</h2>
            <p>{blogEntry.published_date}</p>
          </div>
          <div className="article_info">
            <p>{blogEntry.description}</p>
            <p>by {blogEntry.author}</p>
          </div>
        </div>
      </section>
    </>
  )
}
