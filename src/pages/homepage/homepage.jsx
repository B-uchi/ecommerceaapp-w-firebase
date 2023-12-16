import React from 'react'
import Navbar from '../../components/Navbar'
import CategoryList from '../../components/CategoryList'

const Homepage = () => {
  return (
    <>
        <Navbar/>

        <main>
            <CategoryList/>
        </main>
    </>
  )
}

export default Homepage