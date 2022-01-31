import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

interface LocationState {
  from: {
    pathname: string;
  };
}

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();

  const state = location.state as LocationState;
  const from = state?.from?.pathname || '/';

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get('username') as string;

    await signIn(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="px-4 py-5 my-5 ">
      <h1 className="display-5 fw-bold text-center">Login Page</h1>
      <div className="col-lg-5 mx-auto">
        <p className="lead mb-4 text-center">
          You must log in to view the page at {from}
        </p>
        <form onSubmit={handleSubmit}>
          <Form.Label>Username</Form.Label>
          <div className="d-flex gap-3">
            <Form.Control name="username" type="text" />
            <Button type="submit">Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
