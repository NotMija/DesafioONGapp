import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { Dashboard } from './screens/Dashboard'
import { Route, Routes } from 'react-router-dom'
import { EducationNursery } from './screens/EducationNursery'
import { Food } from './screens/Food'
import { Advocacy } from './screens/Advocacy'
import { Reports } from './screens/Reports'

export const App = () => {

  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/nursery" element={<EducationNursery />} />
        <Route path="/food" element={<Food />} />
        <Route path="/advocacy" element={<Advocacy/>} />
        <Route path="reports" element={<Reports />} />
      </Route>
    </Routes>
  )
}
