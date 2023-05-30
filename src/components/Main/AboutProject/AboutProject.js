import SectionTitle from "../../SectionTitle/SectionTitle";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="AboutProject">
      <SectionTitle title="О проекте" className="AboutProject__heading" />
      <div className="AboutProject__text">
        <div>
          <h2 className="AboutProject__title">
            Дипломный проект включал 5 этапов
          </h2>
          <h3 className="AboutProject__subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </h3>
        </div>
        <div>
          <h2 className="AboutProject__title">
            На выполнение диплома ушло 5 недель
          </h2>
          <h3 className="AboutProject__subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </h3>
        </div>
      </div>
      <div className="AboutProject__progress-bar">
        <div className="AboutProject__progress-bar_type_backend">
          <a className="AboutProject__progress-bar_type_short">1 неделя</a>
          <p className="AboutProject__topic">Back-end</p>
        </div>
        <div className="AboutProject__progress-bar_type_frontend">
          <a className="AboutProject__progress-bar_type_long">4 недели</a>
          <p className="AboutProject__topic">Front-end</p>
        </div>
      </div>
    </section>
  );
}
export default AboutProject;
