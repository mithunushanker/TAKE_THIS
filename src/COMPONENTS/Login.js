import React from 'react';
import{auth,provider}from '../SERVICES/firebasse';
import '../CSS/Login.css';
import book from '../Assets/book.png';

function Login() {
    const signinwithgoogle=()=>{
        auth.signInWithRedirect(provider).catch(alert)
        
      };
    return (
      <div>
        <div className="container-fluid grid" >
   <div className="row" >
     {/**column 1 */}
     <div className="col-lg-6">
     
      <h1 className="takeit" >TAKE-IT</h1>
      <p>Hey do you ever forgot to write your school class work notes and became a watchman for your classroom
         if yes this website is particullarly for you peoples.This website is Made for peoples like me who do not write their class work notes at time and become watchman.you can get compressed and high quality pdf versions of classwork notes in this website. why are you waiting login and open the door of the website

      </p>
        <button  className="login-provider-button" onClick={signinwithgoogle} >
        Sign In With <span><img alt="i will be loaded" width="35px" height="35px"src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" /></span>
       </button>
      
    
     </div>

     {/**column 2*/}
     <div className="col-lg-6" >
       <img className="d-none d-lg-block d-xl-block d-xxl-block" style={{backgroundColor:"black",marginTop:'04%'}} width="85%" height="85%"src={book} alt="i Will load wait and"/>
     </div>
     
     </div>

    </div>
    </div> 
    )
}

export default Login;
