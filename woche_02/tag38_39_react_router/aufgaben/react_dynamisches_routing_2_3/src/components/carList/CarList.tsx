import dataCars from "../../data/dataCars.json"
import { Link } from "react-router"
import "./CarList.css"

export default function CarList() {
  return (
    <>
      <section className="grid">
        {dataCars.map((card) => (
          <div key={card.id} className="car_card">
            <h3>{card.carModel}</h3>
            <Link to={`/${card.carModel.toLowerCase()}`}>Read more</Link>
          </div>
        ))}
      </section>
    </>
  )
}
