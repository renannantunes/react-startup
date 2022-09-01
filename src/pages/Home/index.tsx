import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FlagSelector } from '../../components/FlagSelector';

export const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <div className="position-relative">
          <FlagSelector />
        </div>
      </Container>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">{t('home.title')}</h1>
        <div className="col-md-5 mx-auto">
          <p className="lead mb-4">{t('home.text')}</p>
          <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
            <Link to="/protected" className="btn btn-primary btn-lg px-4 gap-3">
              {t('home.buttonProtectedPage')}
            </Link>
            <Link to="/about" className="btn btn-outline-secondary btn-lg px-4">
              {t('home.buttonAboutPage')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
