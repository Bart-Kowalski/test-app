import React from 'react';
import {Link, Routes, Route} from "react-router-dom";

import './App.css';
import {InputForm} from "./InputForm";
import {PolicyPage} from "./Policy";
import {Github} from "./Github";

export const routesPaths = {
    about: 'about',
    contact: 'contact',

}

function App() {
  return (
      <div className={"App"}>
          <div>routing</div>
          <div className='App-header'>
            <div>
                Logo
            </div>
            <div>
                <Link className='App-link' to={('/')}>Home</Link>
                <Link className='App-link' to={(`/${routesPaths.about}`)}>About</Link>
                <Link className='App-link' to={(`/${routesPaths.contact}`)}>Contact</Link>
                <Link className='App-link' to={('/privacypolicy')}>Privacy Policy</Link>
                <Link className='App-link' to={('/github')}>Github</Link>
            </div>
          </div>
          <Routes>
              <Route path='/' element={<InputForm defaultValue={'hello form'}/>}/>
              <Route path='*' element={<div>404</div>}/>
              <Route path={`/${routesPaths.about}`} element={<div>About</div>}/>
              <Route path='/privacypolicy' element={<PolicyPage/>}/>
              <Route path={(`/${routesPaths.contact}`)} element={<div>Form</div>}/>
              <Route path='/github' element={<Github/>}/>
          </Routes>
      </div>

    /*<div className="App">
      <header className="App-header">
        <InputForm defaultValue={'Hello form'}/>
      </header>
    </div>*/


  );
}

export default App;
