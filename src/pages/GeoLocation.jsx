import React,{ useState,useEffect } from 'react'

const GeoLocation = () => {

    const [latitude,setLatitude] =  useState("");
    const[longitude,setLogitude] = useState("");

    const geo = navigator.geolocaton

    useEffect(() => {
        // Check if geolocation is available in the browser
        if (navigator.geolocation) {
          // Get user's current location
          navigator.geolocation.getCurrentPosition(userCoords, handleError);
        } else {
          console.log('Geolocation is not supported by this browser.');
        }
      }, []);

    //Get user current Location 
    // geo.getCurrentPosition(userCoords)

    function userCoords(position){
        let userLatitude = position.coords.latitude
        let userLongitude = position.coords.longitude
        console.log(userLatitude);
        console.log(userLongitude);
        setLatitude(userLatitude);
        setLogitude(userLongitude);
    }

    function handleError(error) {
        console.error('Error occurred while fetching location:', error);
      }

  return (
    <>
    <div className=''>
       GeoLocation
       <p>Current Location</p>
       <p>Latitude : {latitude}</p>
       <p>Longitude : {longitude}</p>
    </div>
    </>
  )
}

export default GeoLocation