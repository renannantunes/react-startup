import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const Dashboard: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">
        Welcome to Dashboard Protected Page!
      </h1>
      <div className="col-lg-5 mx-auto">
        <p className="lead mb-4">Welcome {auth.user}! </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Button
            onClick={() => {
              auth.signOut(() => navigate('/'));
            }}
            className="btn-lg px-4"
          >
            Sign out
          </Button>
        </div>
      </div>
    </div>
  );
};
