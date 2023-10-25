import { useState } from 'react'
import './App.css'
import { Home,Login } from './pages'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Protected from './components/Protected';
import ViewMore from './pages/view_more/ViewMore';
function App() {

  return (
    <>
      <div className='App'>
        <BrowserRouter>
        <Routes>
          <Route path='/WeatherForecast/' element={ <Login/>}/>
          <Route path='/WeatherForecast/home' element={<Protected>
            <Home/>
          </Protected>}/>
          <Route path='/WeatherForecast/home/more' element={<Protected>
            <ViewMore/>
          </Protected>}/>
        </Routes>
        </BrowserRouter>
       
      </div>
    </>
  )
}

export default App
