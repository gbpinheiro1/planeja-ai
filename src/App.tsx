import { RouterProvider } from "react-router"
import { router } from "./router"
import { ThemeProvider } from "./context/theme/ThemeProvider"

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
