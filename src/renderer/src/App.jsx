import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage'
import RoleSelector from './pages/RoleSelector'
import AuthPatientRegister from './pages/auth/patient/AuthPatientRegister'
import AuthPatientLogin from './pages/auth/patient/AuthPatientLogin'
import AuthStoreManagerRegister from './pages/auth/manager/AuthStoreManagerRegister'
import AuthStoreManagerLogin from './pages/auth/manager/AuthStoreManagerLogin'
import AuthPatient from './pages/auth/patient/AuthPatient'
import PatientPage from './pages/patient/PatientPage'
import PillListPage from './pages/patient/PillListPage'
import StoreManagerPage from './pages/manager/StoreManagerPage'
import AuthSystemAdminLogin from './pages/auth/admin/AuthSystemAdminLogin'
import SystemAdminPage from './pages/admin/SystemAdminPage'
import AuthOwnerRegister from './pages/auth/owner/AuthOwnerRegister'
import AuthOwnerLogin from './pages/auth/owner/AuthOwnerLogin'
import OwnerPage from './pages/owner/OwnerPage'

export default function App() {
  return (
    <div className="font-roboto">
      <Routes>
        <Route path="/" element={<RoleSelector />} />

        <Route path="/auth/patient" element={<AuthPatient />} />
        <Route path="/auth/patient/register" element={<AuthPatientRegister />} />
        <Route path="/auth/patient/login" element={<AuthPatientLogin />} />
        <Route path="/patient" element={<PatientPage />} />
        <Route path="/illness/:id" element={<PillListPage />} />

        <Route path="/auth/store-manager/register" element={<AuthStoreManagerRegister />} />
        <Route path="/auth/store-manager/login" element={<AuthStoreManagerLogin />} />
        <Route path="/store-manager" element={<StoreManagerPage />} />

        <Route path="/auth/system-admin" element={<AuthSystemAdminLogin />} />
        <Route path="/system-admin" element={<SystemAdminPage />} />

        <Route path="/auth/owner/register" element={<AuthOwnerRegister />} />
        <Route path="/auth/owner/login" element={<AuthOwnerLogin />} />
        <Route path="/owner" element={<OwnerPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}
