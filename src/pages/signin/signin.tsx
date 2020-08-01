import React, { useState } from 'react'
import { IonPage, IonText, IonHeader, IonToolbar, IonTitle, IonList, IonItemDivider, IonItem, IonInput, IonButton, IonButtons, IonBackButton, IonSpinner, IonToast, IonRouterLink } from '@ionic/react'
import { Link, Redirect } from 'react-router-dom';

// set the default values for the controls
let initialValues = {
    email: "",
    password:""
  };

  type SignIn = {
    firebase:any,
    name:string
  }
const SignIn: React.FC<any> = (props:any)=>{
    // console.log(props)
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    let [error,setError] = useState('')
    let [loading,setLoginStatus] = useState(false)
  
    let [loggedInStatus,changeLoggedInStatus] = useState(false)
    const [showToast1,setShowToast1] = useState({status:false,value:""});
  


    var loginNow = (event:any)=>{
        event.preventDefault();

        setLoginStatus(true);

        if(email.length > 0 && password.length > 0){
            setError('')

            props.firebase.auth().signInWithEmailAndPassword(email, password).then((user:any)=>{

                // console.log("Success")
                // console.log(user)
                // alert("Hello")
                changeLoggedInStatus(true)
                setLoginStatus(false)
                setShowToast1({status:true,value:'Login Success'})

            }).catch(function(error:any) {
                // console.log("Failed")      
                // console.log(error)
                          // var errorCode =     error.code;

                setError('Wrong Email ID or Password')
                setShowToast1({status:true,value:error.message})
                setLoginStatus(false)
              });
    
        
              

        }else{
            setLoginStatus(false)
            setError('Email or Password Fields are Empty')
        }

        
    }

    if(loggedInStatus === true){
        return <Redirect to='/home/feeds' />
    }else{
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
                <h1 style={{fontSize:'64px',fontWeight:300}}>Login</h1>
                
                <form  onSubmit={loginNow} >
                    <a style={{color:'red'}}>{error}</a>
                    <IonList style={{padding:'10px'}}>
                        <IonItem>
                            <IonInput   type='email'
                                        id='login_email' 
                                        placeholder="Enter Email ID" 
                                        onIonChange={(e:any) =>{setEmail(e.target.value)}} />
                           
                        </IonItem>
                        <br />
                        <IonItem>
                            <IonInput id='login_password' type='password' placeholder="Enter password" onIonChange={(e:any) =>{setPassword(e.target.value)}}/>
                            
                        </IonItem>
                        <br />
                            <IonButton type='submit' expand="full" shape='round' style={{fontWeight:300}}>
                           
                            {loading === true ?  <IonSpinner name="crescent" /> : 'Sign In'}
                                {/* Sign In */}
                            </IonButton>
                        
                    </IonList>
                </form>
                <div style={{padding:'40px',paddingTop:'0',paddingBottom:'0'}}>
                <br />
                    <IonText>
                        Forgot Password ?
                    </IonText>
                    <br />
                    <br />
                    <Link to='/signup'>
                    <IonButton color='danger'  shape='round' expand='full' style={{fontWeight:300}}>
                        Sign Up
                    </IonButton>
                    </Link>
                    <IonRouterLink href='/home/feeds'>Home</IonRouterLink>
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

    
}

export default SignIn