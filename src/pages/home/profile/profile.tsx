import React, { useState, useContext } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonImg, IonCardSubtitle, IonText, IonSegment, IonSegmentButton, IonRouterLink, IonLabel, IonRouterOutlet, IonAvatar, IonProgressBar } from '@ionic/react';
import { settingsOutline, personAddOutline, appsOutline, videocamOutline, bookmark, bookmarkOutline, peopleCircleOutline } from 'ionicons/icons';
import { Link, Route } from 'react-router-dom';
import ProfilePosts from './ProfilePosts';
import HomeContext from '../../../ContextAPIS/HomeContext';

const Profile: React.FC = () => {

    let [routestate,setRouteState] = useState({state:'1'})

    let userContextData = useContext(HomeContext);

    
    // console.log(userContextData)
    
    let firestoreObject = userContextData.userFirestore;
    // console.log(userContextData)

    let evaluate =()=>{
        switch(routestate.state)
        {
            case '1': return <ProfilePosts />   
            case '2': return <div>
                IGTV
            </div> 
            case '3': return <div>
                bookmark
            </div> 
            case '4': return <ProfilePosts />   

            default : return <div>
                Some issue is there !!
            </div>
        }
    }


  return (
    <IonPage>
      <IonHeader >
      <IonToolbar color="dark" style={{textAlign:'center'}}>

        <IonButtons slot="start">
            <IonButton>
                <IonIcon style={{fontSize:'24px'}}  icon={settingsOutline}></IonIcon>
            </IonButton>
        </IonButtons>

        <IonTitle>{firestoreObject.username || 'Profile_username'}</IonTitle>


        <IonButtons slot="end">
            <IonButton>
                <IonIcon style={{fontSize:'24px'}} icon={personAddOutline}  ></IonIcon>
            </IonButton>
        </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      {firestoreObject.username !== ''?'':<IonProgressBar type="indeterminate"></IonProgressBar>}
       <div style={{display:'flex'}}>
           <div style={{paddingTop:'16px',paddingLeft:'16px'}}>
                <img style={{width:'96px',height:'96px',borderRadius:'50%'}} alt='Profile Photo' src={firestoreObject.photoURL || 'https://instagram.fist7-2.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fist7-2.fna.fbcdn.net&_nc_ohc=A6o7aLhimJwAX9wFur0&oh=ea2994039bc76c2fdccd5f1485392df6&oe=5F52F48F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2'} />
           </div>
           <div style={{paddingTop:'20px',paddingLeft:'16px'}}>
               <IonTitle>{firestoreObject.username || 'Profile_username'}</IonTitle>
               {/* <IonButton style={{width:'60vw'}}>Edit Profile</IonButton> */}
               <Link to='/home/profile/edit'><IonButton style={{width:'60vw'}}>Edit Profile</IonButton></Link>
           </div>
       </div>
       <div className='description' style={{padding:'10px'}}>
            <div style={{padding:'5px'}}>
                <IonText  >{firestoreObject.name || 'Profile_fullname'}</IonText>
            </div>
           <div style={{padding:'0px'}}>
           <IonText>
           {firestoreObject.bio || 'Profile_bio'}
           </IonText>
           </div>
       </div>
        <IonSegment style={{border:'1px solid #dedede'}} onIonChange={e => setRouteState({state:e.detail.value? e.detail.value : '1'})} >
            <IonSegmentButton value='1' >
                <IonIcon icon={appsOutline} />
            </IonSegmentButton>
            <IonSegmentButton value='2'>
                <IonIcon icon={videocamOutline} />
            </IonSegmentButton>
            <IonSegmentButton value='3'>
                <IonIcon icon={bookmarkOutline} />
            </IonSegmentButton>
            <IonSegmentButton value='4'>
                <IonIcon icon={peopleCircleOutline} />
            </IonSegmentButton>
        </IonSegment>
        <div>
            {
                evaluate()
            }
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
