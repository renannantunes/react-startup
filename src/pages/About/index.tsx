import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Who are we?</h1>
        <div className="col-lg-5 mx-auto">
          <p className="lead mb-4">
            That feels like an existential question, don't you think?
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/" className="btn btn-primary btn-lg px-4 gap-3">
              Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
