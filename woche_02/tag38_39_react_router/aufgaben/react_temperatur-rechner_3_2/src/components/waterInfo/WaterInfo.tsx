import React from "react"
import "./WaterInfo.css"

interface WaterInfoProps {
  waterInfo: string
  className?: string
}

export default function WaterInfo(prop: WaterInfoProps) {
  return (
    <>
      <div>
        <p className={prop.className}>{prop.waterInfo}</p>
      </div>
    </>
  )
}
