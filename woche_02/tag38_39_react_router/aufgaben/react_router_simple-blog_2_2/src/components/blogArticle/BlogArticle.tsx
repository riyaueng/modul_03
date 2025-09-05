import React from "react"
import Button from "../button/Button"
import "./BlogArticle.css"

interface BlogArticleProps {
  img: string
  altText: string
  name: string
  btnLink: string
}

export default function BlogArticle(props: BlogArticleProps) {
  return (
    <>
      <img src={props.img} alt={props.altText} />
      <h3>{props.name}</h3>
      <Button link={props.btnLink} text="Read more" />
    </>
  )
}
