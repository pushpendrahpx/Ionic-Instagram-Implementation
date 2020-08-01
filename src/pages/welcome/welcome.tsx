import React, { useState } from 'react';
import { IonSlides, IonSlide, IonContent, IonButton, IonText, IonActionSheet } from '@ionic/react';
import { Link } from 'react-router-dom';
import { trashOutline, shareSocialOutline, caretForwardCircleOutline, heartOutline, closeOutline, shareOutline } from 'ionicons/icons';

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 400
};

export const WelcomeComponent: React.FC = () => {
    

    let [showActionSheet,setShowActionSheet] = useState(false)
    

    
    return (
  <IonContent>
    <IonSlides pager={true} options={slideOpts} style={{height:'100vh'}}>
      <IonSlide style={{display:'block'}}>
      <IonButton onClick={() => setShowActionSheet(true)} expand="block">
        Show Action Sheet
      </IonButton>
      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        cssClass='my-custom-class'
        buttons={[{
          text: 'Delete',
          role: 'destructive',
          icon: trashOutline,
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: 'Share',
          icon: shareOutline,
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Play (open modal)',
          icon: caretForwardCircleOutline,
          handler: () => {
            console.log('Play clicked');
          }
        }, {
          text: 'Favorite',
          icon: heartOutline,
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cancel',
          icon: closeOutline,
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]}
      >
      </IonActionSheet>
        <h1>Slide 1</h1>
      </IonSlide>
      <IonSlide style={{display:'block'}}>
        <h1>Slide 2</h1>
      </IonSlide>
      <IonSlide style={{display:'block'}}>
            <div><IonText>
            <h1>Slide 3</h1>
            </IonText></div>
        <br /><br />
        <Link to='/signin'><IonButton>Start Shareable</IonButton></Link>
      </IonSlide>
    </IonSlides>
  </IonContent>
) };