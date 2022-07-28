import React,{useState} from 'react'
import { useDispatch } from 'react-redux';

import { addBooking } from '../actions/bookings';

export default function AddBookingForm(props){
   
const dispatch=useDispatch();
   /* const [id,setId]=useState(0);
   const [name,setName]=useState('')
   const [brand,setBrand]=useState('')
   const [price,setPrice]=useState(0); */

const initialFormState = {
   
   userId:0,

   vehicleId:0,
  
   bookingId:0,
   
   bookingFromDate:"yyyy-MM-dd",
   bookedTillDate:"yyyy-MM-dd",
   bookingDesc:"",
   totalCost:0.0,
   distance:0.0,

   

  /*id:0,
   name:'',
   price:0,
   brand:''*/

}
 
const [booking,setBooking]=useState(initialFormState);
//a function which is universal for all changes 
//id ,name ,brand , price
//when is handleInputChange 
//when you are changing the name of the product
//      event.target.name =name
//event.target.value ='mouse'



const handleInputChange = (event)=>{
   const {name,value} =event.target;
  
   setBooking({...booking,[name]:value});
}
 
/*
const handleIdChange =(event)=>{
   setId(event.target.value)
}

const handleNameChange = (event)=>{
   setName(event.target.value)
}

const handleBrandChange=(event)=>{
   setBrand(event.target.value)
}

const handlePriceChange=(event)=>{
   setPrice(event.target.value)
}*/

const submitHandler=(event)=>{event.preventDefault();
if( !booking.bookingFromDate || !booking.bookedTillDate|| !booking.bookingDesc
   || !booking.distance   ||!booking.totalCost  ||!booking.userId   ||!booking.vehicleId) return;
 console.log(booking+'from addbookingform')
props.addBooking(booking);
dispatch(addBooking(booking));
setBooking(initialFormState);

}
return (<>

   <form onSubmit={submitHandler}>

<label>BookingId  :</label>
<input 
type='number'
name='id'
value={booking.bookingId}
onChange={handleInputChange}/>
<br></br>
<br></br>
<br></br>

<label>BookingFromDate</label>
<input 
type='date'
name='bookingFromDate'
value={booking.bookingFromDate}
onChange={handleInputChange}/>

<br></br>
<br></br>
<br></br>

<label>BookedTillDate</label>
<input 
type='date'
name='bookedTillDate'
value={booking.bookedTillDate}
onChange={handleInputChange}/>

<br></br>
<br></br>
<br></br>

<label>BookingDescription</label>
<input 
type='text'
name='bookingDesc'
value={booking.bookingDesc}
onChange={handleInputChange}/>

<br></br>
<br></br>
<br></br>

<label>Distance</label>
<input 
type='number'
name='distance'
value={booking.distance}
onChange={handleInputChange}/>
<br></br>
<br></br>
<br></br>

<label>TotalCost</label>
<input 
type='number'
name='totalCost'
value={booking.totalCost}
onChange={handleInputChange}/>
<br></br>
<br></br>
<br></br>


<label>VehicleId</label>
<input 
type='number'
name='vehicleId'
value={booking.vehicleId}
onChange={handleInputChange}/>
<br></br>
<br></br>
<br></br>


<label>CustomerId</label>
<input 
type='number'
name='userId'
value={booking.userId}
onChange={handleInputChange}/>

<br></br>
<br></br>
<br></br>

<button>Add New Booking</button>

</form>


</>
)


}