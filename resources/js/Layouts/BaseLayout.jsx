import Footer from '@/Components/Footer'
import Navigation from '@/Components/Navigation'
import React from 'react'

const BaseLayout = ({children}) => {
  return (
    <div className=''>
        <div className=''>
            <Navigation />
        </div>
        {children}
        <div className=''>
            <Footer />
        </div>
    </div>
  )
}

export default BaseLayout