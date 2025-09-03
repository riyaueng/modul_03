import SectionIntro from "../../components/sectionIntro/SectionIntro"
import SectionDescription from "../../components/sectionDescription/SectionDescription"

export default function Jenson() {
  return (
    <>
      <SectionIntro headline="Jenson" page="products" />
      <SectionDescription
        img="../../../public/img/tisch.png"
        altText="Holztisch mit Topfpflanze"
        headline=""
        description="Jenson demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it."
      />
    </>
  )
}
