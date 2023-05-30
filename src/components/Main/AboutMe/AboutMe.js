import React from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import image from "../../../images/photoAboutMe.png";
import './AboutMe.css'

function AboutMe() {
  return (
    <section className="about-me">
      <SectionTitle ClassName="about-me__heading" title="Выпускник" />
      <div className="about-me__info">
        <img className="about-me__image" src={image} alt="Еввгений"/>
        <div className="about-me__container">
          <h3 className="about-me__name">Евгений</h3>
          <h4 className="about-me__descripton">Фронтенд-разработчик, 23 года</h4>
          <div className="about-me__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
            есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
            Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
            После того, как прошёл курс по веб-разработке, начал заниматься
            фриланс-заказами и ушёл с постоянной работы.
          </div>
          <a className="about-me__github" href="https://github.com/Eugene-Guryanov">github</a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
