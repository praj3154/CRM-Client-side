



import Customer from './components/customer/Customer';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ListCustomer from './components/listCustomers/ListCustomer';

import {BrowserRouter , Route, Routes} from 'react-router-dom'
import User from './components/user/User';
import Userlogin from './components/user/Registration';
import Registration from './components/user/Registration';
import HomePage from './page/entry/HomePage';
import ProfilePage from './components/profile/Profile';

function App() {

    

  



  return (
    <div className="App">
     
    <BrowserRouter>
    <Header/> 
    <Routes>
    <Route path='/' element ={<HomePage/>} ></Route>

      <Route path='/reg' element ={<Registration/>}> </Route>
     
      <Route path='/customer-details' element ={<ListCustomer/>} ></Route>
      <Route path='/profile' element ={<ProfilePage/>} ></Route>
      <Route path='/login' element ={<User/>} ></Route>
      <Route path='/add-customer' element ={<Customer/>}> </Route>
      <Route path='/edit-customer/:id' element = {<Customer/>}> </Route>
      </Routes>

     
      <Footer/> 
    </BrowserRouter>
   
    </div>
  );
}

export default App;
