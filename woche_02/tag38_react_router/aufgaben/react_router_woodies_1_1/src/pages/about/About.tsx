import "./About.css"
import SectionDescription from "../../components/sectionDescription/SectionDescription"
import SectionIntro from "../../components/sectionIntro/SectionIntro"

export default function About() {
  return (
    <>
      <SectionIntro headline="Who we are" page="About us" />
      <SectionDescription
        img="../../../public/img/about.png"
        altText="Salat in Holzschüsseln mit Salatbesteck"
        headline="WOODIES is the home of modern wooden furniture"
        description="the answer to your need for furniture with shapes, sizes and colors."
      />
    </>
  )
}
