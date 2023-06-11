import './Promo.css'
import img from '../../../images/promo-image.svg'
import { Link, animateScroll as scroll } from "react-scroll";

function Promo() {
    return (<section className='promo'>
        <img className='promo__img' src={img}  alt='глобус из слов web'/>
        <div className='promo__container'>
            <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
            <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            <Link className='promo__button button-active button-hover' to='more' spy={true}
                smooth={true}
                offset={-70}
                duration={500}>Узнать больше</Link>
        </div>
    </section>

    )
}

export default Promo