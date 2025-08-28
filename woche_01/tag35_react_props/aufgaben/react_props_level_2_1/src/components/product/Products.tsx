import "./Products.css"

interface ProductProps {
  img: string
  title: string
  price: number
}

const Product: React.FC<ProductProps> = (props) => {
  return (
    <>
      <div className="product">
        <img src={props.img} alt="Produkt" />
        <h3>{props.title}</h3>
        <p>{props.price} €</p>
        <button>Buy Now</button>
      </div>
    </>
  )
}

export default Product
