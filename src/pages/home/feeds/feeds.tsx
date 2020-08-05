import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonMenuButton, IonIcon, IonLabel, IonButton, IonFabButton, IonCard, IonCardHeader, IonCardTitle, IonRouterLink, IonCardSubtitle, IonRippleEffect, IonCardContent, IonInfiniteScroll, IonInfiniteScrollContent, IonActionSheet, IonSlides, IonSlide, IonRefresher, IonRefresherContent, IonSpinner, IonImg, IonThumbnail, IonProgressBar } from '@ionic/react';
import { chatboxOutline, sendOutline, cameraOutline, heartOutline, alertCircle, chatbubbleOutline, share, shareOutline, heartHalfOutline, heartDislikeOutline, menuOutline, trashOutline, caretForwardCircleOutline, closeOutline, chevronDownCircleOutline } from 'ionicons/icons';
import Stories from './stories';
type PostCards = {
    setShowActionSheet: ()=>void
}
const PostCards: React.FC<any> = (props:any)=>{
  console.log(props)
    return <IonCard style={{boxShadow:'none',border:'1px solid #dedede',margin:0}}>
    <IonCardHeader style={{display:'flex'}}>

    <img src='https://lh3.googleusercontent.com/ogw/ADGmqu83s0oDGRRYddKeOj8UF2A-NX29HW9HhV8k4On3=s128-c-mo' style={{width:'32px',height:'32px',borderRadius:'128px',marginRight:'10px',marginLeft:0}} />
    <div>
        <IonCardTitle style={{fontSize:'16px'}}>
            
            <IonRouterLink href='/u/pushpendrahpx' style={{textDecoration:'none',color:'black'}}>
            {props.postData.username || 'pushpendrahpx_sample_usernmae'}
            </IonRouterLink>
        </IonCardTitle>
        <IonCardSubtitle style={{paddingTop:'0',marginTop:'0',fontSize:'12px'}}>NIT Surat, Gujarat, India</IonCardSubtitle></div>


            <div style={{right:0,top:0,paddingTop:'8px',position:'absolute'}}>
            <IonButton onClick={()=>props.setShowActionSheet(true)}>
                <IonIcon style={{fontSize:'24px'}} icon={menuOutline}  ></IonIcon>
            </IonButton>
            </div>


    </IonCardHeader>
    
    <IonSlides>
      {
        props.postData.postContent.map((eachPhoto:any,index:any)=>{
          return <IonSlide key={index}>
            {/* <span></span> */}
            {/* <div style={{width: '100%',height:'auto'}} slot='start'>
              <a style={{fontSize:'0',margin:0,padding:0}}>.</a>
            <IonImg src={eachPhoto.imageSrc}/>
            </div> */}
            
            <IonCardContent className='ion-activatable' style={{position: 'relative',overflow: 'hidden',maxWidth:'100vw',border:'1px solid #dedede',padding:'1px'}} >
              <IonImg alt='Loading...' src={eachPhoto.imageSrc}/>
              <IonRippleEffect></IonRippleEffect>
            </IonCardContent>
            </IonSlide>
        })
      }
      
      {/* <IonSlide>
      <div className='ion-activatable' style={{position: 'relative',overflow: 'hidden',maxWidth:'100vw',border:'1px solid #dedede'}} >
        <img src="https://instagram.famd1-1.fna.fbcdn.net/v/t51.2885-15/e35/116578614_103538124746528_7191687969033266789_n.jpg?_nc_ht=instagram.famd1-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=xVKpTcjjlOUAX-B5RZX&oh=e5917e47b1438f023e40a259199881db&oe=5F4F0C51"/>
        <IonRippleEffect></IonRippleEffect>
      </div>
      </IonSlide> */}
    </IonSlides>
  
 
      
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
          <div>
            {props.postData.extras.description}
          </div>
      </IonCardContent>
  </IonCard>
}



const Feeds: React.FC = () => {
     const [showActionSheet, setShowActionSheet] = useState(false);

     const [allPosts,setAllPosts] = useState([])
    let doRefresh = (event: CustomEvent<any>)=>{
      GetAllPosts(event)
      event.detail.complete();
      // alert("Doing Refresh Function")
    }

    const GetAllPosts = async (sample_event_from_refresh:any)=>{
      let response = await fetch('https://us-central1-clonsta-a2627.cloudfunctions.net/getAllPosts',{
        method:'POST'
      })
      let data = await response.json()
      console.log(data)
      if(data){
        await setAllPosts(data)
        sample_event_from_refresh.detail.complete()
        
      }else{
        alert("Failed to Load Posts! Contact admin@shareable.tech ASAP");
      }

      


    }



    useEffect(()=>{
      GetAllPosts({detail:{complete:()=>{}}})
    },[])



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



      <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
        <IonRefresherContent
          pullingIcon={chevronDownCircleOutline}
          pullingText="Pull to refresh"
          refreshingSpinner="circles"
          refreshingText="Refreshing...">
        </IonRefresherContent>
      </IonRefresher>





            <Stories />
        {/* <ExploreContainer name="Tab 1 page" /> */}

        {/* <PostCards setShowActionSheet={setShowActionSheet} ></PostCards> */}
        {
          allPosts.map((eachPost:any)=>{
            return <PostCards key={eachPost.postId} setShowActionSheet={setShowActionSheet} postData={eachPost}></PostCards>
          })
        }
        <div style={{textAlign:"center"}}><IonSpinner name="crescent" /></div>
        
           <IonInfiniteScroll onIonInfinite={(e:any)=>{e.target.complete(); console.log("Again Searching for Posts")}} >
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
