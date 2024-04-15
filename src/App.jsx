import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { LoginPage } from './screens/Login'
import { LoginPage } from './screens/LoginPage'
import { Dashboard } from './screens/Dashboard'
import { Route, Routes } from 'react-router-dom'
import { EducationNursery } from './screens/EducationNursery'
import { EducationLKG } from './screens/EducationLKG'
import { EducationUKG } from './screens/EducationUKG'
import { YouthComputer } from './screens/YouthComputer'
import { Food } from './screens/Food'
import { Advocacy } from './screens/Advocacy'
import { Reports } from './screens/Reports'
import { AddFood } from './screens/AddFood' 

export const App = () => {

  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/nursery" element={<EducationNursery />} />
        <Route path="/LKG" element={<EducationLKG />} />
        <Route path="/UKG" element={<EducationUKG />} />
        <Route path="/Computer" element={<YouthComputer />} />
        <Route path="/food" element={<Food />} />
        <Route path="/addfood" element={<AddFood />} />
        <Route path="/advocacy" element={<Advocacy />} />
        <Route path="/reports" element={<Reports />} />
      </Route>
    </Routes>
  )
}