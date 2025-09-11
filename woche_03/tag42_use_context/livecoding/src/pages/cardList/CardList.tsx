import { useContext, useEffect } from "react"
import { useParams } from "react-router"
import { mainContext, type MainProviderProps } from "../../context/MainProvider"
import CardItem from "../../components/cardItem/CardItem"

export default function CardList() {
  const { linkParam } = useParams<string>()

  // Die Variable aus dem MainContext bzw. aus dem MainProvider kann durch eine Methode "useContext" verwendet werden

  const { items, setLink } = useContext(mainContext) as MainProviderProps

  console.log(items)

  useEffect(() => {
    setLink(linkParam)
  }, [linkParam])

  // console.log(linkParam)

  return (
    <>
      <h2>{linkParam?.toLocaleUpperCase()} Page</h2>
      <div>
        {items.map((item: any, index) => {
          return (
            <div key={index}>
              <CardItem item={item} link={linkParam || ""} />
            </div>
          )
        })}
      </div>
    </>
  )
}
