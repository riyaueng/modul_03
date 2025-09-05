import "./Button.css"
import { Link } from "react-router"

interface ButtonProps {
  link: string
  text: string
}

export default function Button(props: ButtonProps) {
  return (
    <>
      <Link to={props.link} className="button_link">
        {props.text}
      </Link>
    </>
  )
}
