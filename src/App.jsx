import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { Dashboard } from './screens/Dashboard'
import { Route, Routes } from 'react-router-dom'

export const App = () => {

  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
