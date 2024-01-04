import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import { ThemeProvider, createTheme } from '@mui/material'
import { green, purple } from '@mui/material/colors'
import Midnightrunnes from './pages/Midnightrunners'

const theme = createTheme({
  palette: {
    primary: green,
    secondary: purple
  }
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/midnight-runners',
    element: <Midnightrunnes />
  }
])
function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
