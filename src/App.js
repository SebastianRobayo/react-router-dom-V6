import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import UsersPage from "./pages/UsersPage";
import NotFoundPage from "./pages/NotFoundPage";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route
              path="welcome"
              element={<p className="badge badge-secondary my-2">Welcome!!!</p>}
            />
            <Route
              path="goodbye"
              element={<p className="badge badge-accent my-2">Goodbye!!!</p>}
            />
          </Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/usuarios" element={<Navigate to="/user" />} />
          <Route path="/users/:id" element={<UsersPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
