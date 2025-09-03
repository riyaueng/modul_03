import SectionIntro from "../../components/sectionIntro/SectionIntro"
import SectionDescription from "../../components/sectionDescription/SectionDescription"

export default function Deon() {
  return (
    <>
      <SectionIntro headline="Deon" page="products" />
      <SectionDescription
        img="../../../public/img/stuhl.png"
        altText="Blauer Stuhl"
        headline=""
        description="Deon demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it."
      />
    </>
  )
}
