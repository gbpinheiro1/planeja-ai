import { Outlet } from "react-router"

import { Header } from "../shared/Header"

export function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
