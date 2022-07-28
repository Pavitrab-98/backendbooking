













import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import BookingList from "./components/BookingList"

import { useState,useEffect } from 'react';
import apiClient from './http-common'
import {BrowserRouter, Routes ,Route ,  Link ,useNavigate } from 'react-router-dom'
import AddBookingForm  from "./components/AddBookingForm"
import EditBookingForm from "./components/EditBookingForm"
import { updateBooking } from './actions/bookings';


import {cancelBooking} from "./actions/bookings"











function App() {
  
const [bookings,setBookings]=useState([]);

    //when App component gets loaded , a call to api will render the bookings list as a response
    //which we are setting to the bookings
    useEffect(()=>{apiClient.get('/viewAllBooking').then((response)=>{
      setBookings(response.data);
    })},[])

    
const [editing,setEditing]=useState(false);



const initialFormState = {
  userId:0,
  vehicleId:0,
  bookingId:0,
  bookingFromDate:"yyyy-MM-dd",
  bookedTillDate:"yyyy-MM-dd",
  bookingDesc:"",
  totalCost:0.0,
  distance:0.0

}
const [currentBooking,setCurrentBooking] 
     =useState(initialFormState);

   //child component --AddProductForm child -App is parent ,product object in the form of input fields form 
   //brand price name on submission  
async function addBooking(booking){
  try{
  const response=await apiClient.post('/addbooking',booking);
    setBookings([...bookings,response.data]);
    console.log(bookings);
    
  }catch(err){
    console.log(err)
  }
  
}



async function cancelBooking(id){
  await apiClient.delete(`/CancelBooking/${id}`);
    setBookings(bookings.filter((booking)=>booking.id !== id));
  }
  
  /*const editProduct=(product)=>{

    setEditing(true);
      setCurrentProduct
      ({id:product.id,name:product.name,
        price:product.price,brand:product.brand})
     
  }*/
  
  /*const updateBooking = (id,updatedBooking)=>{
  
    setEditing(false);
    apiClient.put(`/products/${id}`,updatedProduct).then((response)=>
    {
  
      console.log('product updated');
      setProducts(products.map((product)=>
    (product.id === id ? updatedProduct : product)));
    })
    
  }*/
  
  
  
  
  return (<div>
    <div className='container'>
    <h1>Booking Crud app with hooks</h1>



    <div className='flex-row'>
      <div className='flex-large'>
        {editing ? (
        <div>
          <h2>Edit Booking Form </h2>
          <EditBookingForm
           setEditing={setEditing}
           currentBooking={currentBooking}
           updateBooking={updateBooking}
           />
           </div>):(

    <BrowserRouter>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/bookings" className="navbar-brand">
          React App
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/bookings"} className="nav-link">
              Bookings
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/addBooking"} className="nav-link">
              Add Booking
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
        <Route path='/' element={<BookingList 
    bookingData={bookings} 
         //editProduct={editProduct}
         cancelBooking={cancelBooking} />} ></Route>
          <Route exact path="addBooking" element={<AddBookingForm addBooking={addBooking}/>} />



          
         <Route path='/bookings' element={<BookingList 
         bookingData={bookings} 
         //editBooking={editBooking}
         cancelBooking={cancelBooking} />}></Route>



         

         
        { /*<Route path='/products' element={<ProductList 
    productData={products} 
         editProduct={editProduct}
         deleteProduct={deleteProduct} />}>*/}






         
         <Route path="/bookings/:bookingId:userId:vehicleId" element={<EditBookingForm /> }></Route>
        </Routes>


      </div>
    
    </BrowserRouter>
    )}</div></div></div></div>
)}

export default App;

















































































/*import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import ProductList from './components/ProductList'
import { useState,useEffect } from 'react';
import apiClient from './http-common'
import {BrowserRouter, Routes ,Route ,  Link ,useNavigate } from 'react-router-dom'
import AddProductForm from './components/AddProductForm';
import EditProductForm from './components/EditProductForm';
import { deleteProduct } from './actions/products';

function App() {
  
const [products,setProducts]=useState([]);

    //when App component gets loaded , a call to api will render the products list as a response
    //which we are setting to the products
    useEffect(()=>{apiClient.get('/products').then((response)=>{
      setProducts(response.data);
    })},[])

    
const [editing,setEditing]=useState(false);

const initialFormState = {
  id:0,
  name:'',
  price:0,
  brand:''

}
const [currentProduct,setCurrentProduct] 
     =useState(initialFormState);

   //child component --AddProductForm child -App is parent ,product object in the form of input fields form 
   //brand price name on submission  
async function addProduct(product){
  try{
  const response=await apiClient.post('/products',product);
    setProducts([...products,response.data]);
    console.log(products);
    
  }catch(err){
    console.log(err)
  }
  
}



async function deleteProduct(id){
  await apiClient.delete(`/products/${id}`);
    setProducts(products.filter((product)=>product.id !== id));
  }
  
  const editProduct=(product)=>{

    setEditing(true);
      setCurrentProduct
      ({id:product.id,name:product.name,
        price:product.price,brand:product.brand})
     
  }
  
  const updateProduct = (id,updatedProduct)=>{
  
    setEditing(false);
    apiClient.put(`/products/${id}`,updatedProduct).then((response)=>
    {
  
      console.log('product updated');
      setProducts(products.map((product)=>
    (product.id === id ? updatedProduct : product)));
    })
    
  }
  
  
  
  
  return (<div>
    <div className='container'>
    <h1>Product Crud app with hooks</h1>
    <div className='flex-row'>
      <div className='flex-large'>
        {editing ? (
        <div>
          <h2>Edit Product Form </h2>
          <EditProductForm
           setEditing={setEditing}
           currentProduct={currentProduct}
           updateProduct={updateProduct}
           />
           </div>):(

    <BrowserRouter>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/products" className="navbar-brand">
          React App
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/products"} className="nav-link">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/addProduct"} className="nav-link">
              Add Product
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
        <Route path='/' element={<ProductList 
    productData={products} 
         editProduct={editProduct}
         deleteProduct={deleteProduct} />} ></Route>
          <Route exact path="addProduct" element={<AddProductForm addProduct={addProduct}/>} />
         
         <Route path='/products' element={<ProductList 
    productData={products} 
         editProduct={editProduct}
         deleteProduct={deleteProduct} />}>

         </Route>
         <Route path="/products/:id" element={<EditProductForm /> }></Route>
        </Routes>
      </div>
    
    </BrowserRouter>
    )}</div></div></div></div>
)}

export default App;*/
