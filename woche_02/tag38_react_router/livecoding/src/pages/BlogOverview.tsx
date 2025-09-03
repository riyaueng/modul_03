import blogData from "../blockData.json"
import { Link } from "react-router"

export default function BlogOverview() {
  return (
    <div>
      <h1>Meine schöner Blog</h1>
      <p>Willkommen auf meiner Seite</p>
      <ul>
        {blogData.map((entry) => (
          <li>
            <Link to={`/blog/${entry.slug}`}>{entry.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
