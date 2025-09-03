import Navigation from "../navigation"

export default function Header() {
  return (
    <header className="bg-pink-500 p-2">
      <nav className="flex gap-2">
        <Navigation to="/" text="Home"></Navigation>
        <Navigation to="/about" text="About"></Navigation>
        <Navigation to="/contact" text="Contact"></Navigation>
        <Navigation to="/blog" text="Blog"></Navigation>
      </nav>
    </header>
  )
}
