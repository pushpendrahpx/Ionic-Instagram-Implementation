import React from 'react';
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






type Home = {
    firebase:any,
    name:string
  }
const Home: React.FC<any> = (props:any)=>{
    return <IonApp>

    <IonReactRouter >
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home/feeds" component={Feeds} exact={true} />
          <Route path="/home/profile" component={Profile} exact={true} />
          <Route path="/home/profile/edit" component={EditProfile} exact={true} />
          <Route path="/home/explore" component={Explore} exact={true} />
          <Route path="/home/tab2" component={Tab2} exact={true} />
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
          <IonTabButton tab="tab3" href="/home/tab2">
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
}

export default Home;