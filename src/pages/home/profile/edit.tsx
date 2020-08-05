import React, { useContext } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonButton, IonInput, IonLabel, IonTextarea, IonSelectOption, IonSelect, IonItem, IonButtons, IonBackButton, IonAvatar } from '@ionic/react';
import { Link } from 'react-router-dom';
import HomeContext from '../../../ContextAPIS/HomeContext';

const EditProfile: React.FC = () => {

    // State Defined
    /* ------------------------------------------------------------- */

    /* ------------------------------------------------------------- */



    
    let userContextData = useContext(HomeContext);
    // console.log(userContextData)
    
    let firestoreObject = userContextData.userFirestore;
    // console.log(imageURL.photoURL)
    // if(imageURL){
    //     // console.log(imageURL.photoURL)
    // }   
    console.log("S")
    console.log("D")

  return (
    <IonPage>
      <IonHeader>
            
 
        <IonToolbar color='dark'>
                <IonButtons slot="start">
                    <IonBackButton />
                </IonButtons>
          <IonTitle>Edit Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
       <div style={{display:'flex'}}>
           <div style={{paddingTop:'16px',paddingLeft:'16px'}}>
                <IonAvatar>
                <img style={{width:'64px',height:'64px',border:'1px solid #dedede',padding:'2px'}} src={firestoreObject.photoURL} />
                </IonAvatar>
            </div>
           <div style={{paddingTop:'20px',paddingLeft:'16px'}}>
               <IonTitle>{firestoreObject.username}</IonTitle>
               <IonButton color='dark' style={{width:'60vw'}}>Change Profile Photo</IonButton>
           </div>
       </div><br />
       <div style={{padding:'20px',paddingBottom:0,paddingTop:0}} className='form-group'>
           <IonLabel>Name</IonLabel>
        <div style={{padding:'5px',paddingRight:0,paddingLeft:0}}>
            <IonInput placeholder={firestoreObject.name} style={{border:'2px solid #dedede',borderRadius:'5px'}} type='text' value={firestoreObject.name} />
        </div>
        <small style={{color:'grey'}}>
        Help people discover your account by using the name you're known by: either your full name, nickname, or business name.
        <br />You can only change your name twice within 14 days.
        </small>
       </div>



       <div style={{padding:'20px',paddingBottom:0,paddingTop:0}} className='form-group'>
           <IonLabel>Username</IonLabel>
        <div style={{padding:'5px',paddingRight:0,paddingLeft:0}}>
            <IonInput placeholder='Enter username' style={{border:'2px solid #dedede',borderRadius:'5px'}} type='text' value={firestoreObject.username} />
        </div>
       </div>



       <div style={{padding:'20px',paddingBottom:0,paddingTop:0}} className='form-group'>
           <IonLabel>Website</IonLabel>
        <div style={{padding:'5px',paddingRight:0,paddingLeft:0}}>
            <IonInput placeholder='Website link' style={{border:'2px solid #dedede',borderRadius:'5px'}} type='text' value={firestoreObject.website} />
        </div>
        
       </div>

        <div style={{padding:'20px',paddingBottom:0,paddingTop:0}} className='form-group'>
            <IonLabel>Bio</IonLabel>
        <div style={{padding:'5px',paddingRight:0,paddingLeft:0}}>
            <IonTextarea placeholder='Enter your Bio' style={{border:'2px solid #dedede',borderRadius:'5px'}} value={firestoreObject.bio}  />
        </div>
        
        </div>
        
        <hr />
        <div style={{padding:'20px',paddingTop:0,paddingBottom:0}}>
            <small style={{color:'grey'}}>
            Personal Information
            Provide your personal information, even if the account is used for a business, a pet or something else. This won't be a part of your public profile.

            </small>
        </div>
        <br /><br />

       <div style={{padding:'20px',paddingBottom:0,paddingTop:0}} className='form-group'>
           <IonLabel>Email ID</IonLabel>
        <div style={{padding:'5px',paddingRight:0,paddingLeft:0}}>
            <IonInput placeholder='Enter Email ID' style={{border:'2px solid #dedede',borderRadius:'5px'}} type='text' value={firestoreObject.email} />
        </div>
        
       </div>



       <div style={{padding:'20px',paddingBottom:0,paddingTop:0}} className='form-group'>
           <IonLabel>Phone Number</IonLabel>
        <div style={{padding:'5px',paddingRight:0,paddingLeft:0}}>
            <IonInput placeholder='Enter Phone Number' style={{border:'2px solid #dedede',borderRadius:'5px'}} type='text' value={firestoreObject.phoneNumber} />
        </div>
        
       </div>



       <div style={{padding:'20px',paddingBottom:0,paddingTop:0}} className='form-group'>
           <IonLabel>Gender</IonLabel>
        <div style={{padding:'5px',paddingRight:0,paddingLeft:0}} >
            <IonItem>
            <IonLabel>Gender</IonLabel>
            <IonSelect style={{border:'2px solid #dedede',borderRadius:'5px'}} placeholder="Select Your Gender" okText="Save" cancelText="Cancel" value={firestoreObject.gender}>
                <IonLabel></IonLabel>
                <IonSelectOption>
                    Male
                </IonSelectOption>
                <IonSelectOption>
                    Female
                </IonSelectOption>
                <IonSelectOption>
                    Prefer Not to Say
                </IonSelectOption>
            </IonSelect>
            </IonItem>
        </div>
        
       </div>




            <div style={{textAlign:'center'}}> 
            <IonButton size='large' color='primary' style={{fontSize:'16px',margin:'20px'}}>Save</IonButton>
            </div>

       <br />
        <br />
        <br />
        <br />

      </IonContent>
    </IonPage>
  );
};

export default EditProfile;
