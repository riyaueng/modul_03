import React from "react"
import BlogArticle from "../../components/blogArticle/BlogArticle"
import { blogData } from "../../data/data"
import "./Blog.css"

export default function Blog() {
  return (
    <>
      <section className="section_blog">
        {blogData.map((article) => (
          <div key={article.id} className="box_blog_article">
            <BlogArticle
              img={article.img_url}
              altText={article.title}
              name={article.title}
              btnLink={`/blog/${article.id}`}
            />
          </div>
        ))}
      </section>
    </>
  )
}
