import React from "react";
import arrow from "../../../images/arrow.svg";
import "./Portfolio.css"
import SectionTitle from "../../SectionTitle/SectionTitle";

function Portfolio() {
  return (
    <section className="portfolio">
      <SectionTitle title="Портфолио" className="portfolio__heading" />
      <ul className="portfolio__list">
        <li className="portfolio__list-item button-hover">
          <a className="portfolio__link">Статичный сайт</a>
          <img className="portfolio__button" src={arrow}  alt="стрела"/>
        </li>
        <li className="portfolio__list-item button-hover">
          <a className="portfolio__link">Адаптивный сайт</a>
          <img className="portfolio__button" src={arrow} alt="стрела"/>
        </li>
        <li className="portfolio__list-item button-hover">
          <a className="portfolio__link">Одностраничное приложение</a>
          <img className="portfolio__button" src={arrow} alt="стрела"/>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
