import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import * as authService from './services/authService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  console.log(user)

  const [recipes, setRecipes] = useState([
    {
      name: "Cheesy Beef Scramble",
      instructions: "Recipe 1 instructions",
      ingredients: "Recipe 1 ingredients",
      mainIngredient: "Beef",
      category: "Breakfast",
      image: "https://www.thecookierookie.com/wp-content/uploads/2019/08/cheesy-beef-breakfast-scramble-7-of-12.jpg"
    },
    {
      name: "Pork Tenderloin Fajitas",
      instructions: "Recipe 2 instructions",
      ingredients: "Recipe 2 ingredients",
      mainIngredient: "Pork",
      category: "Lunch",
      image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Pork-Tenderloin-Fajitas_EXPS_SDFM19_30888_B10_19_4b-3.jpg"
    },
    {
      name: "Creamy Tuscan Chicken",
      instructions: "Recipe 3 instructions",
      ingredients: "Recipe 3 ingredients",
      mainIngredient: "Chicken",
      category: "Dinner",
      image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20191011-creamy-tuscan-chicken-delish-ehg-2517-1571259200.jpg"
    }
  ])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route 
          path="/" 
          element={
            <Landing 
              recipes={recipes}
              setRecipes={setRecipes}
            />
          } 
        />
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
