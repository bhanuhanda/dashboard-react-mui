import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ProtectedRoute from './ProtectedRoute';

import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import GenericPage from './pages/GenericPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route
            path="attendance"
            element={<GenericPage pageName="Attendance" />}
          />
          <Route path="leaves" element={<GenericPage pageName="Leaves" />} />
          <Route
            path="organization"
            element={<GenericPage pageName="Organization" />}
          />
          <Route path="tasks" element={<GenericPage pageName="Tasks" />} />
          <Route path="beat" element={<GenericPage pageName="Beat" />} />
          <Route path="targets" element={<GenericPage pageName="Targets" />} />
          <Route path="form" element={<GenericPage pageName="Form" />} />
          <Route path="order" element={<GenericPage pageName="Order" />} />
          <Route
            path="expenses"
            element={<GenericPage pageName="Expenses" />}
          />
          <Route
            path="clients-sites"
            element={<GenericPage pageName="Clients & Sites" />}
          />
          <Route path="reports" element={<GenericPage pageName="Reports" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
