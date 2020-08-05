import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonRefresher, IonRefresherContent, IonList, IonItem, IonItemDivider, IonItemGroup, IonItemSliding, IonItemOptions, IonItemOption, IonLabel, IonNote } from '@ionic/react';
import { chevronDownCircleOutline, heart, trash, star } from 'ionicons/icons';

const Activity: React.FC = () => {


    let doRefresh = ()=>{
        alert("Refresh")
    }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='dark'>
            
          <IonTitle>Activity</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
        <IonRefresherContent
          pullingIcon={chevronDownCircleOutline}
          pullingText="Pull to refresh"
          refreshingSpinner="circles"
          refreshingText="Refreshing...">
        </IonRefresherContent>
      </IonRefresher>
      <IonList>
          <IonItem>
              Pokemin
          </IonItem>
          <IonItem>
              Pokemin
          </IonItem>
          <IonItem>
              Pokemin
          </IonItem>
          <IonItemGroup>
              awr
          <IonItem>
              Pokemin
          </IonItem>
          </IonItemGroup>
          <IonItemDivider>
              dsgf
          </IonItemDivider>
      </IonList>


{/* Sliding Option Below */}
      <IonItemSliding>
        <IonItemOptions side="start">
        <IonItemOption color="danger" expandable>
            Delete
        </IonItemOption>
        </IonItemOptions>

        <IonItem>
        <IonLabel>Expandable Options</IonLabel>
        </IonItem>

        <IonItemOptions side="end">
        <IonItemOption color="tertiary" expandable>
            Archive
        </IonItemOption>
        </IonItemOptions>
    </IonItemSliding>

    <IonItemSliding id="item100">
        <IonItem>  {/* href='' */}
        <IonLabel>
            <h2>HubStruck Notifications</h2>
            <p>A new message in your network</p>
            <p>Oceanic Next has joined your network</p>
        </IonLabel>
        <IonNote slot="end">
            10:45 AM
        </IonNote>
        </IonItem>

        <IonItemOptions side="start">
        <IonItemOption>
            <IonIcon slot="icon-only" icon={heart} />
        </IonItemOption>
        </IonItemOptions>

        <IonItemOptions side="end">
        <IonItemOption color="danger">
            <IonIcon slot="icon-only" icon={trash} />
        </IonItemOption>
        <IonItemOption>
            <IonIcon slot="icon-only" icon={star} />
        </IonItemOption>
        </IonItemOptions>
    </IonItemSliding>
    {/* Sliding Option Above */}

      </IonContent>
    </IonPage>
  );
};

export default Activity;
