import { NavLink } from "react-router"

interface NavigationLinkProps {
  to: string
  text: string
}

export default function Navigation(props: NavigationLinkProps) {
  return (
    <>
      <NavLink className={(state) => `${state.isActive ? "p-2 bg-amber-300" : "p-2 bg-green-300 "}`} to={props.to}>
        {props.text}
      </NavLink>
    </>
  )
}
