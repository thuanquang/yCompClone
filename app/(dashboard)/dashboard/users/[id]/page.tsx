import React from 'react'

export default async function page({params} : {params: Promise<{id: string}>}) {
  const {id} = await params;
  
    return (
    <div className="text-2xl font-bold">User profile: {id}</div>
  )
}