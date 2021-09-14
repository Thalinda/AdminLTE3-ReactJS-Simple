import React from 'react'
import Footer from './componets/common/footer'
import Header from './componets/common/header'
import Menu from './componets/common/menu'
import Dashboard from './componets/pages/dashboard'

export default function App() {
  return (
    <div>
      <Header/>
      <Menu></Menu>
      <Dashboard/>
      <Footer></Footer>
    </div>
  )
}
