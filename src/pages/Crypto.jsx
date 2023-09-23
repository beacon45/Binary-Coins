import React from 'react'
import TableComponent from '../components/TableComponent'
import Filter from '../components/Filter'

const Crypto = () => {
  return (
    <div className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
      <Filter/>
      <TableComponent/>
    </div>
  )
}

export default Crypto