import React from 'react'
import {createBrowserRouter, createRoutesFromElements, 
Route, RouterProvider} from 'react-router-dom'
import RootLayout from './components/RootLayout'
import HomePage from './components/HomePage'
import AdminLogin from './components/AdminLogin'
import About from './components/About'
import HelpLayout from './components/Help/HelpLayout'
import HowToUse from './components/Help/HowToUse'
import ContactMe from './components/Help/ContactMe'
import { contact } from './components/FormHandle/Contact'
import { AdminForm } from './components/FormHandle/AdminForm'
import Result from './components/Result'
import DrugsRegLayout from './components/DrugsResistration/DrugsRegLayout'
import DrugsListing from './components/DrugsResistration/DrugRegister'
import UseGuide from './components/DrugsResistration/UseGuide'
// import { DrugsRegForm } from './components/DrugsResistration/DrugRegister'

const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path='/' element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path='AdminLogin' element={<AdminLogin />} action={AdminForm}/>
      <Route path='About' element={<About />} />
      <Route path='Result' element={<Result />} />
      <Route path='DrugsReg' element={<DrugsRegLayout />}>
        <Route path='DrugsListing' element={<DrugsListing />}/>
        <Route index element={<UseGuide />} />
      </Route>
      <Route path='Help' element={<HelpLayout />}>
        <Route index element={<HowToUse />} />
        <Route path='Contact' element={<ContactMe />} action={contact} />
      </Route>
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router = {router}/>
  )
}

export default App