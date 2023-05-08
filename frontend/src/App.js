import { BrowserRouter,Routes , Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';


import Products from './screens/Products';
import Protected from './components/Protected';
function App() {

  return (
    
    
     <BrowserRouter>
      <Routes>
        <Route path='/' element={< Home />}/>
        <Route path='/login' element={< Login/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/products' element={< Protected  Component={Products}/>}/>
        
      </Routes>
     </BrowserRouter>


      
      
      
      
    
  );
}

export default App;
