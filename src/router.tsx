import { createBrowserRouter } from "react-router"

import { RootLayout } from "./components/layout/RootLayout"
import { SimulationFormPage } from "./pages/SimulationFormPage"

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <SimulationFormPage />,
      },
      {
        path: "/resultado",
        element: <h1>Resultado da Simulação</h1>,
      },
      {
        path: "/historico",
        element: <h1>Histórico de Simulações</h1>,
      },
    ],
  },
])
