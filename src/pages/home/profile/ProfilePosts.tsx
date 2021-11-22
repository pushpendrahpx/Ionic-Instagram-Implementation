import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonImg, IonThumbnail, IonRippleEffect } from '@ionic/react';

type Tile = {
    img:any
}

const Tile: React.FC<any> = (props:any)=>{
    return <IonCol style={{textAlign:'center',position: 'relative',overflow: 'hidden'}} className='ion-activatable'>
    <IonRippleEffect></IonRippleEffect>
        <IonThumbnail style={{width:'100%',height:'100%'}}>
          <IonImg style={{width:'128px',height:'128px',margin:'0 auto',padding:0}} src={props.img} />
        </IonThumbnail>
    </IonCol>
}


const ProfilePosts: React.FC = () => {

    let images = [
        'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
        'https://instagram.famd1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/104102337_207460857009877_7838954474038957387_n.jpg?_nc_ht=instagram.famd1-1.fna.fbcdn.net&_nc_ohc=92JNqGTUotUAX_wZyAj&oh=16f11f2f418398f2eb2846a9465b42ec&oe=5F2F26E8',
        'https://instagram.famd1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/95589281_274861353543371_1524882603201527808_n.jpg?_nc_ht=instagram.famd1-1.fna.fbcdn.net&_nc_ohc=rU8C8QZ7iR8AX9ryzZ7&oh=e6cea04331c80ab6e44faa5347d7f52d&oe=5F3223F6',
        'https://instagram.famd1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/102531477_713194142790142_5370999774858568418_n.jpg?_nc_ht=instagram.famd1-1.fna.fbcdn.net&_nc_ohc=1fXW8_eFmRkAX9DinUN&oh=86b5a3d3513b1089552bf3d78b87e3fc&oe=5F33746D',
        'https://instagram.famd1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/95589281_274861353543371_1524882603201527808_n.jpg?_nc_ht=instagram.famd1-1.fna.fbcdn.net&_nc_ohc=rU8C8QZ7iR8AX9ryzZ7&oh=e6cea04331c80ab6e44faa5347d7f52d&oe=5F3223F6',
        'https://instagram.famd1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/102531477_713194142790142_5370999774858568418_n.jpg?_nc_ht=instagram.famd1-1.fna.fbcdn.net&_nc_ohc=1fXW8_eFmRkAX9DinUN&oh=86b5a3d3513b1089552bf3d78b87e3fc&oe=5F33746D',
        'https://instagram.famd1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/104102337_207460857009877_7838954474038957387_n.jpg?_nc_ht=instagram.famd1-1.fna.fbcdn.net&_nc_ohc=92JNqGTUotUAX_wZyAj&oh=16f11f2f418398f2eb2846a9465b42ec&oe=5F2F26E8',
        'https://instagram.famd1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/95589281_274861353543371_1524882603201527808_n.jpg?_nc_ht=instagram.famd1-1.fna.fbcdn.net&_nc_ohc=rU8C8QZ7iR8AX9ryzZ7&oh=e6cea04331c80ab6e44faa5347d7f52d&oe=5F3223F6',
        'https://instagram.famd1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/102531477_713194142790142_5370999774858568418_n.jpg?_nc_ht=instagram.famd1-1.fna.fbcdn.net&_nc_ohc=1fXW8_eFmRkAX9DinUN&oh=86b5a3d3513b1089552bf3d78b87e3fc&oe=5F33746D',
        'https://instagram.famd1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/95589281_274861353543371_1524882603201527808_n.jpg?_nc_ht=instagram.famd1-1.fna.fbcdn.net&_nc_ohc=rU8C8QZ7iR8AX9ryzZ7&oh=e6cea04331c80ab6e44faa5347d7f52d&oe=5F3223F6',
        'https://instagram.famd1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/102531477_713194142790142_5370999774858568418_n.jpg?_nc_ht=instagram.famd1-1.fna.fbcdn.net&_nc_ohc=1fXW8_eFmRkAX9DinUN&oh=86b5a3d3513b1089552bf3d78b87e3fc&oe=5F33746D'
    ]

    let i = 0;

    var a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

    var arrays = [], size = 3;
        
    while (images.length > 0)
    arrays.push(images.splice(0, size));

    // console.log(arrays)


  return (<div>
          <IonGrid>
              {/* <IonRow>
                  <Tile />
                  <Tile />
                  <Tile />
              </IonRow> */}
              
              {arrays.map((eachrow,index)=>{
                  return <IonRow>
                      {eachrow.map((eachcol:string,indexc)=>{
                        //   console.log(eachcol)
                            return <Tile key={index+"-"+indexc} img={eachcol} />
                        })}
                  </IonRow>
              })}
          </IonGrid>
  </div>
  );
};

export default ProfilePosts;
