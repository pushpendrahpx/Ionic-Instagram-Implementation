import React, { useState, Component, useEffect, useContext } from 'react';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { IonTab } from '@ionic/react';
import { Route, Redirect } from 'react-router';



import Tab1 from './../Tab1';
import Tab2 from './../Tab2';
import Tab3 from './../Tab3';
import { homeOutline, chatboxOutline, notificationsOutline, personOutline, searchCircleOutline, searchOutline, addOutline } from 'ionicons/icons';
import Feeds from './feeds/feeds';
import Profile from './profile/profile';
import EditProfile from './profile/edit';
import Explore from './explore/explore';
import Activity from './activity/Activity';
import { connect } from 'react-redux';
import addUser from '../../Actions/user';

import HomeContext from './../../ContextAPIS/HomeContext';
import UploadPosts from './uploadPosts/uploadPosts';

type Home = {
  firebase:any
  // dispatch: ()=>void
}
interface a{
  
}
type MyProps = {firebase:any,dispatch?:()=>void,userReducers?:any};
type MyState = { loggedStatus: boolean };

class HomeClass<Home> extends Component<MyProps, MyState>{
  constructor(props:any){
    super(props) 

    this.state = {
      loggedStatus:true
    }
  }

  run = (user:any)=> {
    console.log("Gonig to ",user)
    if (user) {
      // this.props.dispatch(addUser({type:'ADD_USER',data:user}))
      console.log(this.props)
      this.setState({loggedStatus:true})
    } else {

      this.setState({loggedStatus:false})
      
      // No user is signed in.
      // this.setState({isLogged:false,hasGotResult:true})
    }
  };

  componentDidMount(){
    console.log(this.props)
    // console.log(value)
    this.props.firebase.auth().onAuthStateChanged(this.run);
  }

  render(){

    if(this.state.loggedStatus === true){

      return <IonApp>
  
      <IonReactRouter >
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/home/feeds" component={Feeds} exact={true} />
            <Route path="/home/profile" component={Profile} exact={true} />
            <Route path="/home/profile/edit" component={EditProfile} exact={true} />
            <Route path="/home/explore" component={Explore} exact={true} />
            <Route path="/home/activity" component={Activity} exact={true} />
            <Route path="/home/" component={Profile} exact={true} />
          </IonRouterOutlet>
          <IonTabBar color='dark' slot="bottom">
            <IonTabButton tab="tab1" href="/home/feeds">
              <IonIcon icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
  
            <IonTabButton tab="tab5" href="/home/explore">
              <IonIcon icon={searchOutline} />
              <IonLabel>Explore</IonLabel>
            </IonTabButton>
  
            <IonTabButton tab="tab4" href="/home/tab3">
              <IonIcon icon={addOutline} />
              <IonLabel>Add Post</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/home/activity">
              <IonIcon icon={notificationsOutline} />
              <IonLabel>Activity</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/home/profile">
              <IonIcon icon={personOutline} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
    }else{
      return <Redirect to='/signin' />
    }

  }

}



const Home: React.FC<any> = (props:any)=>{
  // console.log(props)

  let [loggedStatus,setLoggedStatus] = useState(true);
  let [userDetails,setUserDetails] = useState({name:'Pushpendra Vishwakarma',userData:{photoURL:'',email:'',uid:''}});
  let [userFirestore,setUserFirestore] = useState({photoURL:'',username:'',name:'',website:'',bio:'',email:'',phoneNumber:0,gender:''});

  let getUserProfileDataFromFirestore = async (uid:string)=>{
    let response = await fetch('https://us-central1-clonsta-a2627.cloudfunctions.net/getUser',{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify({uid})
    })

    let data = await response.json();

    // console.log(data)
    if(data){
      console.log(data)
      setUserFirestore(data)
    }
    // setUserFirestor
  }


  let run = (user:any)=> {
    console.log("Gonig to ",user)
    if (user) {
      // props.dispatch(addUser({data:user}))
      // console.log(props)
      setUserDetails(prev=>{
        // console.log(prev)
        getUserProfileDataFromFirestore(user.uid)
        return {...prev,userData:user}
      })
      setLoggedStatus(true)
    } else {

      setLoggedStatus(false)
      
      // No user is signed in.
      // this.setState({isLogged:false,hasGotResult:true})
    }
  };



  // let home = useContext(HomeContext);
  // console.log("HOME - ",home)
  // console.log('Auth Check')
  // console.log(props.firebase.auth())


    //  console.log("SD")
    useEffect(()=>{
      props.firebase.auth().onAuthStateChanged(run);
    },[])

  if(loggedStatus){
    type userAuthData = {
      userDetails:{
        userData:{}
      }
    }
    return <HomeContext.Provider value={
      {
        userAuthData:{photoURL:userDetails.userData.photoURL,uid:userDetails.userData.uid,...userDetails.userData},
        userFirestore:{
          ...userFirestore,
          photoURL:userFirestore.photoURL,
          username:userFirestore.username,
          name:userFirestore.name,
          website:userFirestore.website,
          bio:userFirestore.bio,
          email:userFirestore.email,
          phoneNumber:userFirestore.phoneNumber,
          gender:userFirestore.gender
          }
      }}>
      <IonApp>

    <IonReactRouter >
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home/feeds" component={Feeds} exact={true} />
          <Route path="/home/profile" component={Profile} exact={true} />
          <Route path="/home/profile/edit" component={EditProfile} exact={true} />
          <Route path="/home/explore" component={Explore} exact={true} />
          <Route path="/home/activity" component={Activity} exact={true} />
          <Route path="/home/addPosts" render={(tempProps)=>{
            return <UploadPosts {...tempProps} firebase={props.firebase} />
          }} exact={true} />
          <Route path="/home/" component={Profile} exact={true} />
        </IonRouterOutlet>
        <IonTabBar color='dark' slot="bottom">
          <IonTabButton tab="tab1" href="/home/feeds">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab5" href="/home/explore">
            <IonIcon icon={searchOutline} />
            <IonLabel>Explore</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab4" href="/home/addPosts">
            <IonIcon icon={addOutline} />
            <IonLabel>Add Post</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/home/activity">
            <IonIcon icon={notificationsOutline} />
            <IonLabel>Activity</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/home/profile">
            <IonIcon icon={personOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
  </HomeContext.Provider>
  }else{
    return <Redirect to='/signin' />
  }


  // console.log(props)
  // console.log(props)
  



}

interface MapStateToPropsTypes {
  // Your properties here
  }

  interface MapDispatchToPropsTypes {
  // Your properties here
  }

const mapStateToProps = (state:any) =>{
  return({
     ...state
   });
  };

export default (Home);