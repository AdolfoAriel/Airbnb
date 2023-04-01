
import './App.css';
import NavBar from './components/NavBar';
import Avacards  from './components/Ava-cards.js';
import {  Route, Routes } from 'react-router-dom';
import Biking from './pages/Biking';
import Wedding from './pages/Wedding';
import Swim from './pages/Swim';

import Pay from './pages/Pay';
import Form from './pages/Form';
function App() {
  return (
    <div className="App">
      
      <NavBar/>
     
      
<Routes>
  <Route path='/' element={<Avacards/>} />
      <Route path='biking' element={<Biking/>}/>
      <Route path='wedding' element={<Wedding/>}/>
      <Route path = 'Swim' element={<Swim/>}/>
      <Route path = 'Form' element={<Form/>}/>
      <Route path = 'pay' element ={<Pay/>}/>
</Routes>
    </div>
  );
}

export default App;
