import React, { useEffect, useState, useContext } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonSlides, IonSlide, IonButton, IonRippleEffect, IonIcon, IonTextarea, IonProgressBar, IonText } from '@ionic/react';
import { Prompt } from 'react-router';
import HomeContext from '../../../ContextAPIS/HomeContext';
import { trashBinOutline, cloudUploadOutline, addOutline } from 'ionicons/icons';


let UploadPostsToFirestoreDatabase = async (post:any)=>{
    let response = await fetch('https://us-central1-clonsta-a2627.cloudfunctions.net/addPost',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            post
        })
    })

    let data = await response.json();

    if(data.code == 200){
        return true;
    }else{
        return false;
    }
}


const UploadPosts: React.FC<any> = (props:any) => {



    // console.log(props)
    let userContextData = useContext(HomeContext);
    // console.log(userContextData)
    
    let firestoreObject = userContextData.userFirestore;

    console.log(userContextData)

    // console.log(props)
    
    let [imageSelected,setImageSelected] = useState({length:0})
    let [preventMove,setPreventMove] = useState(false)
    let [description,setDescription] = useState('')

    let [button,setButton] = useState(true)

    interface ob{
        images:string[];
    }
    let ob = {
        images:['']
    }
    let [selectedImageURL,setSelectedImageURL] = useState(ob)  
    // let unlisten = props.history.listen(() => {
     

    //     console.log("on route change");
    //   });
    
   

      useEffect(() => {
        
        return ()=>{
            setImageSelected({length:0})
            setPreventMove(false)
            setSelectedImageURL({images:['']})
        }
    }, [])

    if(imageSelected.length > 0){
        if(preventMove !== true){
            setPreventMove(true)
        }
    }else if(imageSelected.length === 0){
        if(preventMove === true){
            setPreventMove(false)
        }
    }
    
    
    let toUploadPhoto = (event:any)=>{
        // let imageInput = window.document.querySelector("#__UPLOAD_POST_PHOTO__")
        // imageInput.click();
        // alert("S")/

        // console.log(window.URL.createObjectURL(event.target.files[0]));
        // let im = window.URL.createObjectURL(event.target.files[0]);

        for(let temp = 0; temp < event.target.files.length ; temp++){
            let tempURL = window.URL.createObjectURL(event.target.files[temp]);
            setSelectedImageURL((prev:any)=>{
                prev.images.push(tempURL)
                return prev
            })
        }


        
        setImageSelected(event.target.files)
        
    }
    // console.log(selectedImageURL)
    let UploadPhotoToFirebaseStorage = ()=>{
        if(description.length > 0){
            setButton(false)
        var storageRef = props.firebase.storage().ref();

        
        // for(let temp = 0; temp < imageSelected.length ; temp++){
        //     imageSelected
        // }
        // console.log(imageSelected)
        let ALL_FILES = (Object.values(imageSelected));

        
        let uploaded_count = 0;
        type allDownloadURLs = any[]
        
        let allDownloadURLs: any[] = []
        ALL_FILES.forEach((eachFile:any)=>{
            let x_temp = new Date()
            // console.log(eachFile)
            storageRef.child('posts/'+userContextData.userAuthData.uid+btoa(eachFile.name)+x_temp.getTime())
                        .put(eachFile).then(async function(snapshot:any) {
                            
                            console.log('Uploaded a blob or file!');
                            allDownloadURLs.push(await snapshot.ref.getDownloadURL());
                            console.log("ALL FILES = ",ALL_FILES)
                            console.log("UPLOAD COUNT = ",uploaded_count)
                            uploaded_count++;
                            if(uploaded_count == ALL_FILES.length){
                                console.log('Last GOT DETECTED');
                                // Now Upload data to Firestore database
                                let uploadResult = await UploadPostsToFirestoreDatabase({
                                    description:description,
                                    images: allDownloadURLs,
                                    uid:userContextData.userAuthData.uid,
                                    likes_count:0,
                                    shares_count:0,
                                    time:new Date()
                                })

                                if(uploadResult){

                                    alert("UPLOADED AND POSTED");
                                    setImageSelected({length:0})
                                    setPreventMove(false)
                                    setSelectedImageURL({images:['']})
                                    setButton(true)
                                }else{
                                    alert("SOMETHING FAILED")
                                    setButton(true)
                                }
                            }
              }).catch(()=>{
                  alert("Some Error During Uploading Images!!!")
              });
        })
        }else{
            alert("Type Some Post Description....")
        }
        
    }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='dark'>
          <IonTitle>Upload Post</IonTitle>
        </IonToolbar>
        {button===true?'':<IonProgressBar type="indeterminate"></IonProgressBar>}
      </IonHeader>
      <IonContent>
      <Prompt
            when={false}
            message={location => 'This will unselect your images and You will need to again select those images!!'}
          />
        
        {/* Upload Posts */}

        {
            imageSelected.length > 0 
            ?
                    <div>
                    <IonCard style={{boxShadow:'none',border:'1px solid #dedede',margin:0}}>
                    
                    <IonCardHeader style={{display:'flex',border:'0.5px solid #dedede'}}>
                
                    <img src='https://lh3.googleusercontent.com/ogw/ADGmqu83s0oDGRRYddKeOj8UF2A-NX29HW9HhV8k4On3=s128-c-mo' style={{width:'32px',height:'32px',borderRadius:'128px',marginRight:'10px',marginLeft:0}} />
                    <div>
                        <IonCardTitle style={{fontSize:'16px'}}>
                            {firestoreObject.username || 'username'}
                        </IonCardTitle>
                        <IonCardSubtitle style={{paddingTop:'0',marginTop:'0',fontSize:'12px'}}>NIT Surat, Gujarat, India</IonCardSubtitle></div>
            
                
                
                    </IonCardHeader>
                    
                    <IonSlides>
                      {/* <IonSlide>
                      <div className='ion-activatable' style={{position: 'relative',overflow: 'hidden',maxWidth:'100vw',border:'1px solid #dedede'}} >
                        <img src="https://instagram.famd1-1.fna.fbcdn.net/v/t51.2885-15/e35/116578614_103538124746528_7191687969033266789_n.jpg?_nc_ht=instagram.famd1-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=xVKpTcjjlOUAX-B5RZX&oh=e5917e47b1438f023e40a259199881db&oe=5F4F0C51"/>
                        <IonRippleEffect></IonRippleEffect>
                      </div>
                      </IonSlide> */}
                      
                      {
                          


                          selectedImageURL.images.map((imageURL,index)=>{
                              if(index === 0){

                              }else
                              return <IonSlide key={imageURL}>
                              <div className='ion-activatable' style={{position: 'relative',overflow: 'hidden',maxWidth:'100vw',border:'1px solid #dedede'}} >
                                <img style={{width:'100vw',maxHeight:'100vw'}} src={imageURL}  />
                                <IonRippleEffect></IonRippleEffect>
                              </div>
                              </IonSlide>
                          })
                      }
                      {/* <IonSlide>
                      <div className='ion-activatable' style={{position: 'relative',overflow: 'hidden',maxWidth:'100vw',border:'1px solid #dedede'}} >
                        <img style={{width:'100vw',height:'100vw'}} src={selectedImageURL.images.length > 0 ? selectedImageURL.images[1] : ''}  />
                        <IonRippleEffect></IonRippleEffect>
                      </div>
                      </IonSlide> */}
                    </IonSlides>
                  
                 
                      
                      <IonCardContent >
                          <IonTextarea onIonChange={(e:any)=>{
                            //   console.log(e.target.value)
                              setDescription(e.target.value)
                          }} style={{border:"0.5px solid #dedede"}} placeholder='Type Post Description...' />
                         
                      </IonCardContent>

                      <div style={{textAlign:'center'}} id='submit_post_id'>
                          <IonButton color='primary' onClick={UploadPhotoToFirebaseStorage} disabled={button === true ? false:true}> <IonIcon style={{margin:'10px'}} icon={cloudUploadOutline} /> Submit Post</IonButton>
                      </div>
                  </IonCard>
                  {
                        imageSelected.length > 0 ? <div style={{textAlign:"center",marginTop:'40px'}}><IonButton color='danger' disabled={button === true ? false:true} onClick={(event:any)=>{
                            let answer = window.confirm("Want to cancel this Upload ??");
                            if(answer){
                                setImageSelected({length:0})
                                setPreventMove(false)
                                setSelectedImageURL({images:['']})
                            }
                            
                        }}><IonIcon style={{margin:'5px'}} icon={trashBinOutline} /> Cancel Post</IonButton></div> : ''
                    }
                    </div>
        :
                    <div>
                        <div
                        style={{display:'none'}}>
                            <input type="file" accept='image/*' multiple  id='__UPLOAD_POST_PHOTO__' name="file" onChange={(event)=>{
                            toUploadPhoto(event)
                        }}/>
                        </div>
                        

                        <div style={{textAlign:"center"}}>
                        <IonButton color='dark'disabled={false} onClick={(e)=>{
                            
                            let temp =  window.document.getElementById("__UPLOAD_POST_PHOTO__") as HTMLInputElement
                            temp.click()
                            
                        }}> 
                            <IonIcon icon={addOutline} />
                            <br />
                            <IonText>Upload Photo</IonText>
                        </IonButton>
                        </div>
                    </div>

        }

      </IonContent>
    </IonPage>
  );
};

export default UploadPosts;
