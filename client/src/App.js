
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Component/navbar/Navbar';
import Screen from '../src/screen/Screen'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CartScreen from './screen/CartScreen';
import Loginscreen from './screen/Loginscreen';
import Registerscreen from './screen/Registerscreen';
import OrderScreen from './screen/OrderScreen';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes >
        <Route path="/" Component={Screen}></Route>
        <Route path="/cart" Component={CartScreen}></Route>
        <Route path="/login" Component={Loginscreen}></Route>
        <Route path="/register" Component={Registerscreen}></Route>
        <Route path="/order" Component={OrderScreen}></Route>

      </Routes>

      
      </BrowserRouter>
    
     
    </div>
  );
}

export default App;
