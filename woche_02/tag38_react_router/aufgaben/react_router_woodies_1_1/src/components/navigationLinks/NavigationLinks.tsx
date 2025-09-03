import { NavLink } from "react-router"

interface NavigatonsLinksProps {
  to: string
  text: string
}

export default function NavigationLinks(props: NavigatonsLinksProps) {
  return (
    <>
      <NavLink to={props.to}>{props.text}</NavLink>
    </>
  )
}
