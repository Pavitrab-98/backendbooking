import React ,{useState,useEffect}from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'

import { getBookings}from '../actions/bookings'


export default function BookingList(props){
  //we have dispatched the actioncreator retrieveProducts
  //in the component loading time once only
    const dispatch=useDispatch();
    
    
    const [currentBooking,setCurrentBooking]=useState({});
    const [currentIndex,setCurrentIndex]=useState(-1);
    //this products array will hold the state of products 
    const bookings = useSelector((state)=>state.bookings);
     

    useEffect(()=>{
        dispatch(getBookings());
      },[]);

    
    const refreshData=()=>{
        setCurrentBooking(null);
        setCurrentIndex(-1);
    }
 

    const setActiveBooking = (booking,index)=>{
        setCurrentBooking(booking);
        setCurrentIndex(index);

    }

    //any other method
    //for sorting
    //for searching 


return(
<table border={4}>
    <thead>
        <tr>
            <th>CustomerId</th>
            <th>VehicleId</th>
            <th>BookingId</th>
            <th>BookingFromDate</th>
            <th>BookedTillDate</th>
            <th>BookingDescription</th>
            <th>TotalCost</th>
            <th>Distance</th>

        </tr>
    </thead>
    <tbody>
{/*  {props?.productData?.length >0 ?(
        props.productData.map((product)=>(
        */}

  {bookings?.length > 0 ? (
    bookings.map((booking)=>(
      
    <tr key={booking.bookingId}>

        <td>{booking.userId}</td>

        <td>{booking.vehicleId}</td>

        <td>{booking.bookingId}</td>
        
        <td>{booking.bookingFromDate}</td>
        <td>{booking.bookedTillDate}</td>
        <td>{booking.distance}</td>
        <td>{booking.totalCost}</td>
        <td><button 
         onClick={()=>{props.editBooking(booking)}}
        className="button muted-button">Edit</button></td>
        <td><button 
        onClick={()=>props.cancelBooking(booking.bookingId)}
        className="button muted-button">CancelBooking</button></td>
        
     </tr>))):(
        <tr>
            <td colSpan={4}>No Bookings Addedd</td>
        </tr>
     )}

    </tbody>
</table>




)




}
















/*import React ,{useState,useEffect}from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import Card from '@mui/material/Card'
//import { makeStyles } from '@material-ui/core/styles'
import { Grid,CardContent,CardActions ,Button ,Typography } from '@mui/material'
import {retrieveProducts,}from '../actions/products'


export default function ProductList(props){

  /* const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
})) */

//const classes=useStyles();

  //we have dispatched the actioncreator retrieveProducts
  //in the component loading time once only


    /*const dispatch=useDispatch();
    
    
    const [currentProduct,setCurrentProduct]=useState({});
    const [currentIndex,setCurrentIndex]=useState(-1);
    //this products array will hold the state of products 
    const products = useSelector((state)=>state.products);
     

    useEffect(()=>{
        dispatch(retrieveProducts());
      },[]);

    
    const refreshData=()=>{
        setCurrentProduct(null);
        setCurrentIndex(-1);
    }
 

    const setActiveProduct = (product,index)=>{
        setCurrentProduct(product);
        setCurrentIndex(index);

    }*/

    //any other method
    //for sorting
    //for searching 


/*return(
    <div className='{classes.root}'>
        <h4>Product List</h4>
        <Grid   
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
        {products?.length > 0 ? (
    products.map((product)=>(  
     <Grid item xs={12} sm={6} md={3} key={product.id}>
      <Card
        style={{
          width: 200,
          backgroundColor: "yellow",
        }}
      >


<CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom
          >
           </Typography>
          <Typography variant="h5" component="h2">
           Id :{product.id}
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
            Name:{product.name}
            Brand : {product.brand}
            price: {product.price}
          </Typography>
        </CardContent>
        <CardActions>
            <Button size="large">Edit Button</Button>
        </CardActions>
 </Card></Grid>
    ))):(<h1>No Products</h1>)}</Grid></div>)}*/


        