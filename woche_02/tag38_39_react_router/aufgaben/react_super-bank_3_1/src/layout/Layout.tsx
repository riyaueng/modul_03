import React from "react"
import { Outlet } from "react-router"

export default function Layout() {
  return (
    <>
      <div className="w-full min-h-screen bg-[#9C77F2] flex flex-col justify-start items-center gap-2 mt-2">
        <Outlet />
      </div>
    </>
  )
}
