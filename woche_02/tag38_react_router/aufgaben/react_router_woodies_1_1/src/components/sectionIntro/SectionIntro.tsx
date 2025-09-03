import "./SectionIntro.css"

interface IntroProps {
  headline: string
  page: string
}

export default function SectionIntro(props: IntroProps) {
  return (
    <>
      <section className="section_intro">
        <div className="wrapper_title">
          <img src="../../../public/img/icon_flower.svg" />
          <h2 className="headline_linie">{props.headline}</h2>
        </div>
        <div className="linie"></div>
        <div className="wrapper_page">
          <h3>{props.page}</h3>
        </div>
      </section>
    </>
  )
}
