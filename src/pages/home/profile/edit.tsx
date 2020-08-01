import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonButton, IonInput, IonLabel, IonTextarea, IonSelectOption, IonSelect, IonItem, IonButtons, IonBackButton } from '@ionic/react';
import { Link } from 'react-router-dom';

const EditProfile: React.FC = () => {
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
               <IonImg style={{width:'64px',height:'64px',border:'1px solid #dedede',borderRadius:'50%',padding:'2px'}} src={'https://instagram.fcgk2-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=PUxEnx_n8rEAX_aom4c&oh=590a496111bb70bc5c34d6b100e95d62&oe=5F4F000F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2'} />
           </div>
           <div style={{paddingTop:'20px',paddingLeft:'16px'}}>
               <IonTitle>pushpendrahpx</IonTitle>
               <IonButton color='dark' style={{width:'60vw'}}>Change Profile Photo</IonButton>
           </div>
       </div><br />
       <div style={{padding:'20px',paddingBottom:0,paddingTop:0}} className='form-group'>
           <IonLabel>Name</IonLabel>
        <div style={{padding:'5px',paddingRight:0,paddingLeft:0}}>
            <IonInput placeholder='Enter Full Name' style={{border:'2px solid #dedede',borderRadius:'5px'}} type='text' />
        </div>
        <small style={{color:'grey'}}>
        Help people discover your account by using the name you're known by: either your full name, nickname, or business name.
        <br />You can only change your name twice within 14 days.
        </small>
       </div>



       <div style={{padding:'20px',paddingBottom:0,paddingTop:0}} className='form-group'>
           <IonLabel>Username</IonLabel>
        <div style={{padding:'5px',paddingRight:0,paddingLeft:0}}>
            <IonInput placeholder='Enter username' style={{border:'2px solid #dedede',borderRadius:'5px'}} type='text' />
        </div>
       </div>



       <div style={{padding:'20px',paddingBottom:0,paddingTop:0}} className='form-group'>
           <IonLabel>Website</IonLabel>
        <div style={{padding:'5px',paddingRight:0,paddingLeft:0}}>
            <IonInput placeholder='Website link' style={{border:'2px solid #dedede',borderRadius:'5px'}} type='text' />
        </div>
        
       </div>

        <div style={{padding:'20px',paddingBottom:0,paddingTop:0}} className='form-group'>
            <IonLabel>Bio</IonLabel>
        <div style={{padding:'5px',paddingRight:0,paddingLeft:0}}>
            <IonTextarea placeholder='Enter your Bio' style={{border:'2px solid #dedede',borderRadius:'5px'}}  />
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
            <IonInput placeholder='Enter Email ID' style={{border:'2px solid #dedede',borderRadius:'5px'}} type='text' />
        </div>
        
       </div>



       <div style={{padding:'20px',paddingBottom:0,paddingTop:0}} className='form-group'>
           <IonLabel>Phone Number</IonLabel>
        <div style={{padding:'5px',paddingRight:0,paddingLeft:0}}>
            <IonInput placeholder='Enter Phone Number' style={{border:'2px solid #dedede',borderRadius:'5px'}} type='text' />
        </div>
        
       </div>



       <div style={{padding:'20px',paddingBottom:0,paddingTop:0}} className='form-group'>
           <IonLabel>Gender</IonLabel>
        <div style={{padding:'5px',paddingRight:0,paddingLeft:0}} >
            <IonItem>
            <IonLabel>Gender</IonLabel>
            <IonSelect style={{border:'2px solid #dedede',borderRadius:'5px'}} placeholder="Select Your Gender" okText="Save" cancelText="Cancel">
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







       <div style={{padding:'20px',paddingBottom:0,paddingTop:0}} className='form-group'>
           <IonLabel>Phone Number</IonLabel>
        <div style={{padding:'5px',paddingRight:0,paddingLeft:0}}>
            <IonInput placeholder='Enter Phone Number' style={{border:'2px solid #dedede',borderRadius:'5px'}} type='text' />
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
