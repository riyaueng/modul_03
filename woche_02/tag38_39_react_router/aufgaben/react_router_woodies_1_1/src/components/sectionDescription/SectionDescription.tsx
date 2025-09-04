import "./SectionDescription.css"

interface DescriptionProps {
  img: string
  altText: string
  headline: string
  description: string
}

export default function SectionDescription(props: DescriptionProps) {
  return (
    <>
      <section className="section_description">
        <div className="wrapper_img">
          <img src={props.img} alt={props.altText} />
        </div>
        <div className="wrapper_text">
          <h2>{props.headline}</h2>
          <p>{props.description} </p>
        </div>
      </section>
    </>
  )
}
