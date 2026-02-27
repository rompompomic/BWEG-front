import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from '@/widgets/admin-layout';
import LoginPage from '@/pages/LoginPage';
import PlannerPage from '@/pages/PlannerPage';
import OrdersPage from '@/pages/OrdersPage';
import OrderCreatePage from '@/pages/OrderCreatePage';
import InvoicesPage from '@/pages/InvoicesPage';
import InvoiceCreatePage from '@/pages/InvoiceCreatePage';
import ClientsPage from '@/pages/ClientsPage';
import ClientCreatePage from '@/pages/ClientCreatePage';
import ProvidersPage from '@/pages/ProvidersPage';
import ProviderDetailPage from '@/pages/ProviderDetailPage';
import ProviderEditPage from '@/pages/ProviderEditPage';
import CompaniesPage from '@/pages/CompaniesPage';
import VehicleDetailPage from '@/pages/VehicleDetailPage';
import VehicleEditPage from '@/pages/VehicleEditPage';
import DriverDetailPage from '@/pages/DriverDetailPage';
import DriverEditPage from '@/pages/DriverEditPage';
import InventoryEditPage from '@/pages/InventoryEditPage';
import ServiceAreaDetailPage from '@/pages/ServiceAreaDetailPage';
import ServiceAreaEditPage from '@/pages/ServiceAreaEditPage';
import WorkingHoursEditPage from '@/pages/WorkingHoursEditPage';
import DestinationViewPage from '@/pages/DestinationViewPage';
import DestinationEditPage from '@/pages/DestinationEditPage';
import CapacityAddPage from '@/pages/CapacityAddPage';
import CapacityEditPage from '@/pages/CapacityEditPage';
import InventoryCategoryAddPage from '@/pages/InventoryCategoryAddPage';
import InventoryCategoryEditPage from '@/pages/InventoryCategoryEditPage';
import TermsAndConditionsEditPage from '@/pages/TermsAndConditionsEditPage';
import ServicesPage from '@/pages/ServicesPage';
import ServiceRegionsPage from '@/pages/ServiceRegionsPage';
import ServiceRegionEditPage from '@/pages/ServiceRegionEditPage';
import ServiceCategoryEditPage from '@/pages/ServiceCategoryEditPage';
import ServiceCategoryViewPage from '@/pages/ServiceCategoryViewPage';
import PromoPage from '@/pages/PromoPage';
import PromoCreatePage from '@/pages/PromoCreatePage';
import EmployeePage from '@/pages/EmployeePage';
import EmployeeCreatePage from '@/pages/EmployeeCreatePage';
import EmployeeViewPage from '@/pages/EmployeeViewPage';
import EmployeeEditPage from '@/pages/EmployeeEditPage';
import RolesPage from '@/pages/RolesPage';
import RightsMatrixPage from '@/pages/RightsMatrixPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Navigate to="providers" replace />} />

          <Route path="planner" element={<PlannerPage />} />

          <Route path="orders" element={<OrdersPage />} />
          <Route path="orders/new" element={<OrderCreatePage />} />

          <Route path="invoices" element={<InvoicesPage />} />
          <Route path="invoices/new" element={<InvoiceCreatePage />} />

          <Route path="clients" element={<ClientsPage />} />
          <Route path="clients/new" element={<ClientCreatePage />} />

          <Route path="providers" element={<ProvidersPage />} />
          <Route path="providers/new" element={<ProviderEditPage />} />
          <Route path="providers/:id" element={<ProviderDetailPage />} />
          <Route path="providers/:id/edit" element={<ProviderEditPage />} />

          <Route path="companies" element={<CompaniesPage />} />
          <Route path="companies/new/edit" element={<ProviderEditPage />} />
          <Route path="companies/:providerId" element={<ProviderDetailPage />} />
          <Route path="companies/:providerId/edit" element={<ProviderEditPage />} />
          <Route path="companies/:providerId/vehicles/:vehicleId" element={<VehicleDetailPage />} />
          <Route path="companies/:providerId/vehicles/:vehicleId/edit" element={<VehicleEditPage />} />
          <Route path="companies/:providerId/drivers/:driverId" element={<DriverDetailPage />} />
          <Route path="companies/:providerId/drivers/:driverId/edit" element={<DriverEditPage />} />
          <Route path="companies/:providerId/inventory/:inventoryId/edit" element={<InventoryEditPage />} />
          <Route path="companies/:providerId/service-area/:areaId" element={<ServiceAreaDetailPage />} />
          <Route path="companies/:providerId/service-area/:areaId/edit" element={<ServiceAreaEditPage />} />
          <Route path="companies/:providerId/working-hours/edit" element={<WorkingHoursEditPage />} />
          <Route path="companies/:providerId/destinations/:destinationId" element={<DestinationViewPage />} />
          <Route path="companies/:providerId/destinations/:destinationId/edit" element={<DestinationEditPage />} />
          <Route path="companies/:providerId/capacity/add" element={<CapacityAddPage />} />
          <Route path="companies/:providerId/capacity/:capacityId/edit" element={<CapacityEditPage />} />
          <Route path="companies/:companyId/inventory-categories/add" element={<InventoryCategoryAddPage />} />
          <Route path="companies/:companyId/inventory-categories/:categoryId/edit" element={<InventoryCategoryEditPage />} />
          <Route path="companies/:companyId/terms-and-conditions/edit" element={<TermsAndConditionsEditPage />} />

          <Route path="services" element={<ServicesPage />} />
          <Route path="services/regions" element={<ServiceRegionsPage />} />
          <Route path="services/regions/new" element={<ServiceRegionEditPage />} />
          <Route path="services/regions/:id/edit" element={<ServiceRegionEditPage />} />
          <Route path="services/new" element={<ServiceCategoryEditPage />} />
          <Route path="services/:id" element={<ServiceCategoryViewPage />} />
          <Route path="services/:id/edit" element={<ServiceCategoryEditPage />} />

          <Route path="promo" element={<PromoPage />} />
          <Route path="promo/new" element={<PromoCreatePage />} />

          <Route path="employers" element={<EmployeePage />} />
          <Route path="employers/new" element={<EmployeeCreatePage />} />
          <Route path="employers/:id" element={<EmployeeViewPage />} />
          <Route path="employers/:id/edit" element={<EmployeeEditPage />} />

          <Route path="roles" element={<RolesPage />} />
          <Route path="employers/roles" element={<RolesPage />} />
          <Route path="rights-matrix" element={<RightsMatrixPage />} />

          <Route path="*" element={<Navigate to="/providers" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
