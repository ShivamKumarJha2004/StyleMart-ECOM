import React from 'react'
import Sidebar from './Sidebar'
import { Route,Routes } from 'react-router-dom'
import Addproduct from './Addproduct'
import ListProduct from './ListProduct'

const Admin = () => {
  return (
    <div className=''>
        <Sidebar/>
        <Routes>
          <Route path='/addproduct' element={<Addproduct/>} ></Route>
          <Route path="/listproductt" element={<ListProduct />} />
        </Routes>
     </div>
  )
}

export default Admin