import React, { useState } from 'react'
import { IonPage, IonText, IonHeader, IonToolbar, IonTitle, IonList, IonItemDivider, IonItem, IonInput, IonButton, IonButtons, IonBackButton, IonSpinner, IonToast } from '@ionic/react'
import { Link } from 'react-router-dom';

// set the default values for the controls
let initialValues = {
    email: "",
    password:""
  };

  type SignUp = {
    firebase:any,
    name:string
  }
const SignUp: React.FC<any> = (props:any)=>{
    // console.log(props)
    let [email,setEmail] = useState('pushpendra.hpx2001@gmail.com')
    let [password,setPassword] = useState('googleuser')
    let [name,setName] = useState('Pushpendjndf dnvrb rsgx')
    let [username,setUsername] = useState('pushpendrahpx')
    let [phone,setPhone] = useState('9327046282')


    let [error,setError] = useState('')
    let [loading,setLoginStatus] = useState(false)

    const [showToast1,setShowToast1] = useState({status:false,value:""});
  

    var loginNow = (event:any)=>{
        event.preventDefault();

        setLoginStatus(true);
        // console.log((email.length > 0),(password.length > 0),(name.length > 0) , (username.length > 0), (phone.length==10))

        if((email.length > 0) && (password.length > 0) && (name.length > 0) && (username.length > 0) && (phone.length==10)){
            setError('')
            // alert('usgfykh')

            // props.firebase.auth().signInWithEmailAndPassword(email, password).then((user:any)=>{

            //     console.log("Success")
            //     console.log(user)
            //     alert("Hello")
            //     setLoginStatus(false)

            // }).catch(function(error:any) {
            //     console.log("Failed")      
            //               // var errorCode = error.code;

            //     setError('Wrong Email ID or Password')
            //     setLoginStatus(false)
            //   });

              props.firebase.auth().createUserWithEmailAndPassword(email, password).then((user:any)=>{

                user.user.updateProfile({
                    displayName: name,
                    photoURL: "https://firebasestorage.googleapis.com/v0/b/clonsta-a2627.appspot.com/o/images%2Fdefaultpic.jpg?alt=media&token=5b7be0d5-168c-4bae-9fdf-e381b9472fd3",
                    phoneNumber:phone,
                    username:username
                  }).then(function() {
                    setLoginStatus(false)
                    setShowToast1({status:true,value:'Sign Up Successfull !!'})
                    // console.log(user)


                  }).catch(function(error:any) {
                    setLoginStatus(false)
                    setShowToast1({status:true,value:'Some Error During Registering !! Error Code 0xFF'})
                    // console.log(error)
                  });
                
                }).catch((error:any)=>{
                    setLoginStatus(false)
                    setShowToast1({status:true,value:'User With Email ID and Password Already Exists!!!'})
                    // console.log(error)
                })

        }else{
            setLoginStatus(false)
            setError('Email or Password Fields are Empty')
        }

        
    }
    return (<IonPage >
        <IonText color='dark' style={{textAlign:'center'}}>
            <IonHeader>
                <IonToolbar color='light'>
                    {/* <IonButtons slot='start'>
                        <IonBackButton defaultHref='/'></IonBackButton>
                    </IonButtons> */}
                    <IonTitle style={{fontWeight:300,fontSize:'32px'}}>
                        Shareable
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            
            <div style={{maxWidth:'600px',margin:'0 auto',border:'1px solid #dedede',padding:'10px',borderRadius:'5px'}}>
            <h1 style={{fontSize:'64px',fontWeight:300}}>Sign Up</h1>
            
            <form  onSubmit={loginNow} >
                <a style={{color:'red'}}>{error}</a>
                <IonList style={{padding:'10px'}}>
                    <IonItem>
                        <IonInput   type='text'
                                    value={name}
                                    id='fullname'
                                    placeholder="Enter Full Name" 
                                    onIonChange={(e:any) =>{setName(e.target.value)}} />
                       
                    </IonItem>
                    <br />
                    <IonItem>
                        <IonInput   type='number'
                                    value={phone}
                                    id='phone' 
                                    placeholder="Enter Phone Number" 
                                    onIonChange={(e:any) =>{setPhone(e.target.value)}} />
                       
                    </IonItem>
                    <br />
                    <IonItem>
                        <IonInput   type='text'
                                    value={username}
                                    id='username' 
                                    placeholder="Enter username" 
                                    onIonChange={(e:any) =>{setUsername(e.target.value)}} />
                       
                    </IonItem>
                    <br />
                    <IonItem>
                        <IonInput   type='email'
                                    id='login_email' 
                                    value={email}
                                    placeholder="Enter Email ID" 
                                    onIonChange={(e:any) =>{setEmail(e.target.value)}} />
                       
                    </IonItem>
                    <br />
                    <IonItem>
                        <IonInput id='login_password' value={password} type='password' placeholder="Enter password" onIonChange={(e:any) =>{setPassword(e.target.value)}}/>
                    </IonItem>
                    <br />
                        <IonButton type='submit' color='danger' expand="full" shape='round' style={{fontWeight:300}}>
                       
                        {loading === true ?  <IonSpinner name="crescent" /> : 'Sign Up'}
                            {/* Sign In */}
                        </IonButton>
                    
                </IonList>
            </form>
            <br />
            Already Have an Account ?
            <div style={{padding:'10px',paddingTop:'0',paddingBottom:'0'}}>
               <Link to='/signin'>
               <IonButton  shape='round' expand='full' style={{fontWeight:300}}>
                    Sign In
                </IonButton>
               </Link>
            </div>
            </div>
            
        </IonText>
        <IonToast isOpen={showToast1.status}
                onDidDismiss={()=>setShowToast1({status:false,value:''})}
                message={showToast1.value} 
                duration={5000}
                />
    </IonPage>)
}

export default SignUp