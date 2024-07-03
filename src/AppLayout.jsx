import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Footer from './components/Footer';


const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div>
        <Header></Header>
        <Outlet></Outlet>
        {/* <Footer></Footer> */}
      
    </div>
    </Provider>
  )
}

export default AppLayout
