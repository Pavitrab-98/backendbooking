import React , {useContext, useEffect, useState} from 'react'

export default function EditBookingForm(props){
     const [booking,setBooking] =useState(props.currentBooking)

    const handleInputChange = (event)=>{
        const {name,value} =event.target;
       
        setBooking({...booking,[name]:value});
     }


     const submitHandler=(event)=>{event.preventDefault();
       props.updateBooking(booking.id,booking);
    }


   

     return (
        <form onSubmit={submitHandler}>
         
<label>Id</label>
<h1>{props.currentBooking.bookingId}</h1>


<label>BookingFromDate</label>
<input 
type='date'
name='date'
value={booking.bookingFromDate}
onChange={handleInputChange}/>



<label>BookedTillDate</label>
<input 
type='date'
name='date'
value={booking.bookedTillDate}
onChange={handleInputChange}/>



<label>BookingDescription</label>
<input 
type='text'
name='desc'
value={booking.bookingDesc}
onChange={handleInputChange}/>


<label>TotalCost</label>
<input 
type='number'
name='cost'
value={booking.totalCost}
onChange={handleInputChange}/>


<label>Distance</label>
<input 
type='number'
name='distance'
value={booking.distance}
onChange={handleInputChange}/>




<button>Update Booking</button>
<button onClick={()=>props.setEditing(false)} 
className="button muted-button">Cancel</button></form>


   )




}