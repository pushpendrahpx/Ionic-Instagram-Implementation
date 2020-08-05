import React from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonSegmentButton, IonIcon } from '@ionic/react';
import { chatbubbleOutline, layersOutline, videocamOutline, searchOutline, caretForwardCircleOutline, trendingUpOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import ProfilePosts from '../profile/ProfilePosts';


const Explore: React.FC = ()=>{
    return <IonPage>
    <IonHeader>
      <IonToolbar color='dark'>
        <IonTitle>
            Explore
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
    <IonSegment color='dark'>
        <IonSegmentButton value='search' style={{display:'flex'}}>
            <IonIcon icon={searchOutline}></IonIcon>
        </IonSegmentButton>
        <IonSegmentButton style={{display:'flex'}}>
            <IonIcon icon={caretForwardCircleOutline}></IonIcon>
        </IonSegmentButton>
        <IonSegmentButton>
            <IonIcon icon={layersOutline} />
        </IonSegmentButton>
        <IonSegmentButton>
            <IonIcon icon={trendingUpOutline} />
        </IonSegmentButton>
    </IonSegment>

    <ProfilePosts />
    </IonContent>
  </IonPage>
}

export default Explore;