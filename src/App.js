import React, { useState } from 'react'
import { BrowserRouter, Route, Switch  } from 'react-router-dom';




import Footer from './componets/common/footer'
import Header from './componets/common/header'
import Menu from './componets/common/menu'
import Dashboard from './componets/pages/dashboard'
import Login from './componets/pages/login';
import Post from './componets/pages/post';

export default function App() {
  const [login,setLogin] = useState(false)
  return (
     
    <BrowserRouter forceRefresh >
 
    <Switch>
    <Route path="/" component={Login} exact/>
    <div>
    <Header/>
    <Menu/>
    <Route path="/dashboard" component={Dashboard}/>
    <Route path="/post/:id" component={Post}/>
  </div>
    </Switch>
  
    <Footer/>
    </BrowserRouter>
  )
}
