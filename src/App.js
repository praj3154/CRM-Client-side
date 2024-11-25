



import Customer from './components/customer/Customer';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ListCustomer from './components/listCustomers/ListCustomer';

import {BrowserRouter , Route, Routes} from 'react-router-dom'

function App() {

    

  



  return (
    <div className="App">
     
    <BrowserRouter>
    <Header/> 
    <Routes>
      <Route path='/' element ={<ListCustomer/>}> </Route>
      
      <Route path='/add-customer' element ={<Customer/>}> </Route>
      </Routes>

     
      <Footer/> 
    </BrowserRouter>
   
    </div>
  );
}

export default App;
