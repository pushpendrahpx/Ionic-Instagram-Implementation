import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonMenuButton, IonIcon, IonLabel, IonButton, IonFabButton, IonCard, IonCardContent, IonSlides, IonSlide, IonRippleEffect, IonImg, IonThumbnail, IonCardHeader, IonCardTitle, IonCardSubtitle, IonRouterLink, IonSegment, IonSegmentButton, IonFab, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/react';
import { chatboxOutline, sendOutline, cameraOutline, heartOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';

const StoryPreview: React.FC = ()=>{
    return <div style={{border:'2px solid #6415ad',padding:'0px',margin:'5px',borderRadius:'50%'}}>
        <IonCard  className='ion-activatable' style={{minWidth:'18vw',minHeight:'18vw',maxWidth:'18vw',maxHeight:'18vw',borderRadius:'50%',position: 'relative',overflow: 'hidden',margin:'2px'}}>
    <IonRippleEffect></IonRippleEffect>
    <IonImg src='https://instagram.famd1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/95589281_274861353543371_1524882603201527808_n.jpg?_nc_ht=instagram.famd1-1.fna.fbcdn.net&_nc_ohc=rU8C8QZ7iR8AX9ryzZ7&oh=e6cea04331c80ab6e44faa5347d7f52d&oe=5F3223F6' />
   
</IonCard>
    </div>
}

const StorySlidesContainer: React.FC = ()=>{
    return <IonSlides style={{borderBottom:'2px solid #dedede'}}>
    <IonSlide>
        <StoryPreview />
        <StoryPreview />
        <StoryPreview />
        <StoryPreview />
    </IonSlide>


    <IonSlide>
        <StoryPreview />
        <StoryPreview />
        <StoryPreview />
        <StoryPreview />
    </IonSlide>


    <IonSlide style={{display:'inline-flex',textAlign:'left'}}>
        <StoryPreview />
        <StoryPreview />
    </IonSlide>
</IonSlides>
}

const Stories: React.FC = () => {
  return (
          <StorySlidesContainer />
       
    
  );
};

export default Stories;
