import "./CarDetails.css"
import dataCars from "../../data/dataCars.json"
import { useParams } from "react-router"
import ErrorPage from "../errorPage/ErrorPage"

export default function CarDetails() {
  const { detail } = useParams()
  if (!detail) {
    return <ErrorPage />
  }

  const carDetail = dataCars.find((car) => car.carModel.toLowerCase() === detail)

  if (!carDetail) {
    return <ErrorPage />
  }

  return (
    <>
      <h2>{carDetail.carModel}</h2>
      <p>Year: {carDetail.CarYear}</p>
      <p>{carDetail.CarMake}</p>
    </>
  )
}
