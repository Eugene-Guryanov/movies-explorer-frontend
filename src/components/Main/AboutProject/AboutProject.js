import SectionTitle from "../../SectionTitle/SectionTitle";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project">
      <SectionTitle title="О проекте" className="about-project__heading" />
      <div className="about-project__text">
        <div>
          <h2 className="about-project__title">
            Дипломный проект включал 5 этапов
          </h2>
          <h3 className="about-project__subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </h3>
        </div>
        <div>
          <h2 className="about-project__title">
            На выполнение диплома ушло 5 недель
          </h2>
          <h3 className="about-project__subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </h3>
        </div>
      </div>
      <div className="about-project__progress-bar">
        <div className="about-project__progress-bar_type_backend">
          <a className="about-project__progress-bar_type_short">1 неделя</a>
          <p className="about-project__topic">Back-end</p>
        </div>
        <div className="about-project__progress-bar_type_frontend">
          <a className="about-project__progress-bar_type_long">4 недели</a>
          <p className="about-project__topic">Front-end</p>
        </div>
      </div>
    </section>
  );
}
export default AboutProject;
