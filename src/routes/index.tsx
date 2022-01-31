import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '../hooks/useAuth';

import { Home } from '../pages/Home/index';
import { About } from '../pages/About/index';
import { Private } from '../layout/Private';
import { Dashboard } from '../pages/Dashboard';
import { LoginPage } from '../pages/Authentication/Login';

export const RootRoutes: React.FC = () => (
  <AuthProvider>
    <Routes>
      <Route>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Protected Pages */}
        <Route
          path="/protected"
          element={
            <RequireAuth>
              <Private element={<Dashboard />} />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  </AuthProvider>
);

interface IRequireAuth {
  children: React.ReactElement;
}

const RequireAuth: React.FC<IRequireAuth> = ({ children }) => {
  const { isAutenticated } = useAuth();
  const location = useLocation();

  if (!isAutenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
