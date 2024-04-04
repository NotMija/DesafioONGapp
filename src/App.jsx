import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { Dashboard } from './screens/Dashboard'
import { Route, Routes } from 'react-router-dom'
import { EducationNursery } from './screens/EducationNursery'

export const App = () => {

  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/nursery" element={<EducationNursery />} />
      </Route>
    </Routes>
  )
}
