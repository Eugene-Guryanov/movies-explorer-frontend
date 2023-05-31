import React from "react";
import arrow from "../../../images/arrow.svg";
import "./Portfolio.css"
import SectionTitle from "../../SectionTitle/SectionTitle";

function Portfolio() {
  return (
    <section className="portfolio">
      <SectionTitle title="Портфолио" className="portfolio__heading" />
      <ul className="portfolio__list">
        <li className="portfolio__list-item " >
          <a className="portfolio__link button-hover" href="https://github.com/Eugene-Guryanov/how-to-learn" target="_blank" rel="noreferrer">Статичный сайт</a>
          <a href="https://github.com/Eugene-Guryanov/how-to-learn" className="portfolio__href" target="_blank" rel="noreferrer">
          <img className="portfolio__button button-hover" src={arrow} alt="стрела"/>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a className="portfolio__link button-hover" href="https://github.com/Eugene-Guryanov/russian-travel" target="_blank" rel="noreferrer">Адаптивный сайт</a>
          <a href="https://github.com/Eugene-Guryanov/russian-travel button-hover" target="_blank" rel="noreferrer" className="portfolio__href">
          <img className="portfolio__button" src={arrow} alt="стрела"/>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a className="portfolio__link button-hover" href="https://github.com/Eugene-Guryanov/react-mesto-api-full-gha" target="_blank" rel="noreferrer">Одностраничное приложение</a>
          <a href="https://github.com/Eugene-Guryanov/react-mesto-api-full-gha" target="_blank" rel="noreferrer" className="portfolio__href">
          <img className="portfolio__button button-hover" src={arrow} alt="стрела"/>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
