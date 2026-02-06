import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import PlannerPage from './pages/PlannerPage';
import OrdersPage from './pages/OrdersPage';
import InvoicesPage from './pages/InvoicesPage';
import ClientsPage from './pages/ClientsPage';
import ProvidersPage from './pages/ProvidersPage';
import CompaniesPage from './pages/CompaniesPage';
import ServicesPage from './pages/ServicesPage';
import PromoPage from './pages/PromoPage';
import EmployersPage from './pages/EmployersPage';

export default function App() {
  return (
    <BrowserRouter>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/providers" replace />} />
          <Route path="/planner" element={<PlannerPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/invoices" element={<InvoicesPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/providers" element={<ProvidersPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/promo" element={<PromoPage />} />
          <Route path="/employers" element={<EmployersPage />} />
        </Routes>
      </AdminLayout>
    </BrowserRouter>
  );
}
