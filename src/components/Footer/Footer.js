import './Footer.css';

function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <h2 className="footer__heading">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <div className="footer__link-wrapper">
          <ul className="footer__link-list">
            <li className="footer__list-item">
              <a href="https://practicum.yandex.ru/" className="footer__link" target="_blank" rel="noreferrer">
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__list-item">
              <a href="https://github.com/" className="footer__link" target="_blank" rel="noreferrer">
                Github
              </a>
            </li>
          </ul>
          <p className="footer__copyright">© 2023</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;