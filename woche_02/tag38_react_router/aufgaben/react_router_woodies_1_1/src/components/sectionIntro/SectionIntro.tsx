interface IntroProps {
  headline: string
  page: string
}

export default function SectionIntro(props: IntroProps) {
  return (
    <>
      <section className="section_intro">
        <img src="../../../public/img/icon_flower.svg" />
        <h2>{props.headline}</h2>
        <h3>{props.page}</h3>
      </section>
    </>
  )
}
