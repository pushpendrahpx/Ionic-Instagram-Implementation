import React from 'react';
import { Redirect, Route } from 'react-router-dom';
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
import { ellipse, square, triangle, personOutline, notifications, notificationsOutline, chatboxOutline, homeOutline } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import SignIn from './pages/signin/signin';











import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import 'firebase/database';
import 'firebase/functions';
import SignUp from './pages/signup/signup';
import { WelcomeComponent } from './pages/welcome/welcome';
import { connect } from 'react-redux';
import Home from './pages/home/home';


import FIREBASE_CONFIG from './FIREBASE_CONFIG.json'

var firebaseConfig = FIREBASE_CONFIG;

firebase.initializeApp(firebaseConfig);

interface SD{
  
}


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter >
      {/* <IonTabs> */}
        <IonRouterOutlet>
          <Route path='/welcome' component={WelcomeComponent} />
          <Route path="/signin" render={()=>{
            return <SignIn firebase={firebase} />
          }} exact={true} />
          <Route path="/signup" render={()=>{
            return <SignUp firebase={firebase} />
          }} exact={true} />
          <Route path="/home/*" render={()=>{
            return <Home firebase={firebase} />
          }} exact={true} />
          <Route path="/tab1" component={Tab1} exact={true} />
          <Route path="/tab2" component={Tab2} exact={true} />
          <Route path="/tab3" component={Tab3} />
          <Route path="/" render={() => <Redirect to="/welcome" />} exact={true} />
        </IonRouterOutlet>
        {/* <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/signin">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/tab3">
            <IonIcon icon={chatboxOutline} />
            <IonLabel>Chats</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab2">
            <IonIcon icon={notificationsOutline} />
            <IonLabel>Activity</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab1">
            <IonIcon icon={personOutline} />
            <IonLabel>Account</IonLabel>
          </IonTabButton>
        </IonTabBar> */}
      {/* </IonTabs> */}
    </IonReactRouter>
  </IonApp>
);
const mapStateToProps = (state:any) =>{
  return({
     ...state
   });
  };
export default connect(mapStateToProps)(App);
