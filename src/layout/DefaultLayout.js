import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const DefaultLayout = () => {
  const { isLoggedIn } = useSelector((state) => state.auth)
  /*if (!isLoggedIn) {
    return <Redirect to="/login" />
  }*/
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
