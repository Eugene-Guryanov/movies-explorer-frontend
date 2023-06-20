import SectionTitle from "../../SectionTitle/SectionTitle";
import "./Techs.css";

function Techs() {
  return (<section className="techs" id="more">
    <SectionTitle title="Технологии" className="techs__heading" />
    <h2 className="techs__title">7 технологий</h2>
    <div className="techs__subtitle">
      На курсе веб-разработки мы освоили технологии, которые применили в
      дипломном проекте.
    </div>
    <ul className="techs__blocks">
      <li className="techs__block">HTML</li>
      <li className="techs__block">CSS</li>
      <li className="techs__block">JS</li>
      <li className="techs__block">React</li>
      <li className="techs__block">Git</li>
      <li className="techs__block">Express.js</li>
      <li className="techs__block">mongoDB</li>
    </ul>
  </section>
  )
}

export default Techs;
