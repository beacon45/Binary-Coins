import React from 'react'
import TableComponent from '../components/TableComponent'
import Filter from '../components/Filter'
import { Outlet } from 'react-router-dom'

const Crypto = () => {
  return (
    <div className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
      <Filter/>
      <TableComponent/>
      <Outlet/>
    </div>
  )
}

export default Crypto