import React from "react"
import { Navigate, useParams } from "react-router"
import blogData from "../blockData.json"

export default function BlogDetail() {
  // * useLocation gibt uns Informationen vergleichbar mit window.location; pathname, search
  // const location = useLocation()
  // console.log(location)

  const { slug } = useParams()
  if (!slug) {
    return "404 Error"
  }

  const blogEntry = blogData.find((entry) => entry.slug === slug)

  if (!blogEntry) {
    return "404, kein Eintrag gefunden."
  }

  return (
    <>
      <div>
        <h1>{blogEntry.title}</h1>
        <p>{blogEntry.content}</p>
      </div>
      <Navigate to={"/"} />
    </>
  )
}
