import React, { useState } from 'react';
import { IonSlides, IonSlide, IonContent, IonButton, IonText, IonActionSheet } from '@ionic/react';
import { Link } from 'react-router-dom';
import { trashOutline, shareSocialOutline, caretForwardCircleOutline, heartOutline, closeOutline, shareOutline } from 'ionicons/icons';

import welcome1 from "./../../assets/welcome1.webp"
import welcome2 from "./../../assets/welcome2.webp"
import welcome3 from "./../../assets/welcome3.webp"
import welcome5 from "./../../assets/welcome5.webp"


// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 400
};

export const WelcomeComponent: React.FC = () => {
    


    
    return (
  <IonContent>
    
    <IonSlides pager={true} options={slideOpts} style={{height:'100vh'}}>
      <IonSlide style={{display:'block',padding:"10px"}}>
   
      <h1 style={{fontWeight:"bolder"}}>Ionic-Instagram</h1>
      <br />
      <hr />
       <br />
      <img src={welcome2} style={{borderRadius:"10px",boxShadow:"0 0 10px #c5c5c5"}} />
      Let's share happiness
       [Slide 1]
      <br />
      <br />
      <br />
      Go to Slide 2 =&gt;
      <br />
       <br />
       <br />
       <small style={{color:"grey"}}>Made by Pushpendra Vishwakarma</small>
       <br />
       <small style={{color:"grey"}}>Reach me at <a href="https://pushpendrahpx.github.io">https://pushpendrahpx.github.io</a></small>
      </IonSlide>
      <IonSlide style={{display:'block',padding:"10px"}}>
        
      <h1 style={{fontWeight:"bolder"}}>Ionic-Instagram</h1>
      <br />
      <hr />
       <br />
      <img src={welcome3} style={{borderRadius:"10px",boxShadow:"0 0 10px #c5c5c5"}} />
      Let's share happiness
       [Slide 2]
      <br />
      <br />
      <br />
      Go to Slide 3 =&gt;
      <br />
       <br />
       <br />
       <small style={{color:"grey"}}>Made by Pushpendra Vishwakarma</small>
       <br />
       <small style={{color:"grey"}}>Reach me at <a href="https://pushpendrahpx.github.io">https://pushpendrahpx.github.io</a></small>
      </IonSlide>
      <IonSlide style={{display:'block',padding:"10px"}}>
        
        <h1 style={{fontWeight:"bolder"}}>Ionic-Instagram</h1>
        <br />
        <hr />
         <br />
        <img src={welcome5} style={{borderRadius:"10px",boxShadow:"0 0 10px #c5c5c5"}} />
        Let's share happiness
         [Slide 3]
        <br />
        <br />
        <br />
        <Link to='/signin'><IonButton>Let's get Started</IonButton></Link>
        <br />
         <br />
         <br />
         <small style={{color:"grey"}}>Made by Pushpendra Vishwakarma</small>
         <br />
         <small style={{color:"grey"}}>Reach me at <a href="https://pushpendrahpx.github.io">https://pushpendrahpx.github.io</a></small>
        
      </IonSlide>
    </IonSlides>
  </IonContent>
) };