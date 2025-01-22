"use client"

import { useState, useRef, useEffect } from "react"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
}

export function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [isResizing, setIsResizing] = useState(false)
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = () => setIsResizing(true)
  const handleMouseUp = () => setIsResizing(false)

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizing || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
    const percentage = (x / rect.width) * 100
    setPosition(percentage)
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isResizing])

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden rounded-lg">
      {/* Before image */}
      <div className="absolute inset-0">
        <img
          src={beforeImage || "/placeholder.svg"}
          alt="Before transformation"
          className="w-full h-full object-cover"
        />
      </div>

      {/* After image */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        <img src={afterImage || "/placeholder.svg"} alt="After transformation" className="w-full h-full object-cover" />
      </div>

      {/* Slider control */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${position}%` }}
        onMouseDown={handleMouseDown}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-600"
          >
            <path
              d="M8 5L4 9M4 9L8 13M4 9H16M16 5L20 9M20 9L16 13M20 9H8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

