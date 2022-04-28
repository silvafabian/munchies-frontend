import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import * as authService from './services/authService'
import * as recipeService from './services/recipeService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  // console.log(user)
  const [recipes, setRecipes] = useState([])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  useEffect(() => {
    const allRecipes = recipeService.getAll()
    // console.log(allRecipes)
    // console.log('Testing!!!!!!')
    const testR = allRecipes.then((result) => {
      // console.log(result.hits)
      setRecipes(result.hits)
      return result.hits
    })
    // console.log(testR)
  }, [])

  console.log(recipes)

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  )
}

export default App
