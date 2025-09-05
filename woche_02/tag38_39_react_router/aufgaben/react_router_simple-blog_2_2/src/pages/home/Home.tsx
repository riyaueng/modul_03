import Button from "../../components/button/Button"
import "./Home.css"

export default function Home() {
  return (
    <>
      <section className="section_home">
        <h1>
          Welcome to my <br /> simple Blog
        </h1>
        <Button link="/blog" text="Go to articles" />
      </section>
    </>
  )
}
