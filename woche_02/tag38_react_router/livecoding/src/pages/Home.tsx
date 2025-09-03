import { Link } from "react-router"

export function HomePage() {
  return (
    <>
      <div>
        <h1>Meine schöne Seite</h1>
        <p>
          Willkommen auf meiner schönen Seite! <Link to="/contact">Link to Contact</Link>{" "}
        </p>
      </div>
    </>
  )
}
