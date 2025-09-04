import Navigation from "../Navigation"

export default function Header() {
  return (
    <header className="bg-pink-500 p-2">
      <nav className="flex gap-2">
        <Navigation to="/" text="Home"></Navigation>
        <Navigation to="/about" text="About"></Navigation>
        <Navigation to="/contact" text="Contact"></Navigation>
        <Navigation to="/blog" text="Blog"></Navigation>
        <Navigation to="/pokemon" text="Pokémon"></Navigation>
      </nav>
    </header>
  )
}
