


import Customer from './components/customer/Customer';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Entry from './page/entry/Entry';
import {BrowserRouter , Route, Routes} from 'react-router-dom'

function App() {

    

  



  return (
    <div className="App">
     
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element ={<Entry/>}> </Route>
      <Route path='/cust' element ={<Entry/>}> </Route>
      <Route path='/add-customer' element ={<Customer/>}> </Route>
      </Routes>

     
      <Footer/>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
