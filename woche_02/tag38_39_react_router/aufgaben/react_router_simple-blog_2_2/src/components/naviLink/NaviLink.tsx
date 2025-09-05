import { NavLink } from "react-router"

interface NaviLinkProps {
  to: string
  text: string
}

export default function NaviLink(props: NaviLinkProps) {
  return (
    <>
      <NavLink to={props.to}>{props.text}</NavLink>
    </>
  )
}
