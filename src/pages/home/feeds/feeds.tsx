import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonMenuButton, IonIcon, IonLabel, IonButton, IonFabButton, IonCard, IonCardHeader, IonCardTitle, IonRouterLink, IonCardSubtitle, IonRippleEffect, IonCardContent, IonInfiniteScroll, IonInfiniteScrollContent, IonActionSheet } from '@ionic/react';
import { chatboxOutline, sendOutline, cameraOutline, heartOutline, alertCircle, chatbubbleOutline, share, shareOutline, heartHalfOutline, heartDislikeOutline, menuOutline, trashOutline, caretForwardCircleOutline, closeOutline } from 'ionicons/icons';
import Stories from './stories';
type PostCards = {
    setShowActionSheet: ()=>void
}
const PostCards: React.FC<any> = (props:any)=>{
    return <IonCard style={{boxShadow:'none',border:'1px solid #dedede',margin:0}}>
    <IonCardHeader style={{display:'flex'}}>

    <img src='https://lh3.googleusercontent.com/ogw/ADGmqu83s0oDGRRYddKeOj8UF2A-NX29HW9HhV8k4On3=s128-c-mo' style={{width:'32px',height:'32px',borderRadius:'128px',marginRight:'10px',marginLeft:0}} />
    <div>
        <IonCardTitle style={{fontSize:'16px'}}>
            
            <IonRouterLink href='/u/pushpendrahpx' style={{textDecoration:'none',color:'black'}}>
            pushpendrahpx
            </IonRouterLink>
        </IonCardTitle>
        <IonCardSubtitle style={{paddingTop:'0',marginTop:'0',fontSize:'12px'}}>NIT Surat, Gujarat, India</IonCardSubtitle></div>


            <div style={{right:0,top:0,paddingTop:'8px',position:'absolute'}}>
            <IonButton onClick={()=>props.setShowActionSheet(true)}>
                <IonIcon style={{fontSize:'24px'}} icon={menuOutline}  ></IonIcon>
            </IonButton>
            </div>


    </IonCardHeader>
    <div className='ion-activatable' style={{position: 'relative',overflow: 'hidden',maxWidth:'100vw',border:'1px solid #dedede'}} >
    <img src="https://firebasestorage.googleapis.com/v0/b/clonsta-a2627.appspot.com/o/images%2FIMG-20200729-WA0002.jpg?alt=media&token=32069080-8b71-4528-8d48-918dd0e1d4ec" />
  <IonRippleEffect></IonRippleEffect>
    </div>
  
 
      
      <IonCardContent>
         
          <div style={{display:'flex'}}>
            <button style={{padding:'5px',paddingTop:0,paddingBottom:'0px',fontSize:'24px',background:'transparent',position: 'relative',overflow: 'hidden'}} className='ion-activatable'>
            <IonRippleEffect></IonRippleEffect>
                <IonIcon icon={heartHalfOutline} style={{fontSize:'28px',background:'transparent',border:0,outline:0}} />
            </button>
            <button  style={{padding:'5px',fontSize:'24px',background:'transparent',position: 'relative',overflow: 'hidden'}} className='ion-activatable'>
            <IonRippleEffect></IonRippleEffect>
                <IonIcon icon={chatbubbleOutline} style={{fontSize:'24px',background:'transparent',border:0,outline:0}} />
            </button>
            <button  style={{padding:'5px',fontSize:'24px',background:'transparent',position: 'relative',overflow: 'hidden'}} className='ion-activatable'>
            <IonRippleEffect></IonRippleEffect>
                <IonIcon icon={sendOutline} style={{fontSize:'24px',background:'transparent',border:0,outline:0}} />
            </button>
          
          
          
          </div>
      </IonCardContent>
  </IonCard>
}

const Feeds: React.FC = () => {
     const [showActionSheet, setShowActionSheet] = useState(false);

  return (
    <IonPage>
      <IonHeader >
      <IonToolbar color="dark" style={{textAlign:'center'}}>

        <IonButtons slot="start">
            <IonButton>
                <IonIcon style={{fontSize:'24px'}}  icon={cameraOutline}></IonIcon>
            </IonButton>
        </IonButtons>

        <IonTitle>Shareable</IonTitle>


        <IonButtons slot="end">
            <IonButton>
                <IonIcon style={{fontSize:'24px'}} icon={sendOutline}  ></IonIcon>
            </IonButton>
        </IonButtons>
      </IonToolbar>
      </IonHeader>
      <IonContent>
            <Stories />
        {/* <ExploreContainer name="Tab 1 page" /> */}

        <PostCards setShowActionSheet={setShowActionSheet}></PostCards>
           <PostCards setShowActionSheet={setShowActionSheet}></PostCards>
           <PostCards setShowActionSheet={setShowActionSheet}></PostCards>
           <PostCards setShowActionSheet={setShowActionSheet}></PostCards>
           <PostCards setShowActionSheet={setShowActionSheet}></PostCards>
           <PostCards setShowActionSheet={setShowActionSheet}></PostCards>
           <PostCards setShowActionSheet={setShowActionSheet}></PostCards>
           <PostCards setShowActionSheet={setShowActionSheet}></PostCards>
           <IonInfiniteScroll onIonInfinite={(e:any)=>{e.target.complete(); alert("SD")}} >
               <IonInfiniteScrollContent 
                    loadingSpinner="bubbles" 
                    loadingText="Loading ..." >
               </IonInfiniteScrollContent>
           </IonInfiniteScroll>

      </IonContent>
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
          icon: share,
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
          icon: heartHalfOutline,
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
    </IonPage>
  );
};

export default Feeds;
