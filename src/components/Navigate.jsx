"use client"

import { useEffect } from "react"

// This is a simple component to replace the Navigate component from react-router-dom
// It uses window.location.href to navigate to the specified path
const Navigate = ({ to, replace }) => {
  useEffect(() => {
    if (replace) {
      window.location.replace(to)
    } else {
      window.location.href = to
    }
  }, [to, replace])

  return null
}

export default Navigate
