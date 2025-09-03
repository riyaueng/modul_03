import NavigationLinks from "../navigationLinks/NavigationLinks"

export default function Header() {
  return (
    <>
      <header>
        <img src="../../public/img/logo_woodies.svg" alt="Woodies Logo" />

        <nav>
          <NavigationLinks to="/" text="Home"></NavigationLinks>
          <NavigationLinks to="/about" text="About Us"></NavigationLinks>
          <NavigationLinks to="/products" text="Products"></NavigationLinks>
        </nav>
      </header>
    </>
  )
}
