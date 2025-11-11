import React from 'react'

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <p className="text-2xl font-bold">DASHBOARD</p>
        {children}
    </div>
  )
}