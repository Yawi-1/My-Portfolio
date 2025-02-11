import React from 'react'

const Spinner = () => {
  return (
    <div className="fixed z-10 left-0 top-0 w-full flex items-center justify-center h-screen">
    <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
  </div>
  )
}

export default Spinner