import { Form, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import i18n from '../../languages/config';

export const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Row className="mt-3">
        <Col md={3} className="mx-auto">
          <Form.Select onChange={(e) => i18n.changeLanguage(e.target.value)}>
            <option value="en" selected={i18n.resolvedLanguage === "en"}>English</option>
            <option value="pt" selected={i18n.resolvedLanguage === "pt"}>Português</option>
          </Form.Select>
        </Col>
      </Row>
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
