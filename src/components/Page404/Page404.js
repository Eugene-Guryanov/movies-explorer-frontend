import { useNavigate } from 'react-router-dom';


import './Page404.css';

function Page404() {
  const navigate = useNavigate();

  return (

    <div className="page404">
      <div className="page404__title-wrapper">
        <h1 className="page404__title">404</h1>
        <p className="page404__subtitle">Страница не найдена</p>
      </div>
      <button type="button" className="page404__back-btn" onClick={() => navigate(-1)}>Назад</button>
    </div>

  );
};

export default Page404;