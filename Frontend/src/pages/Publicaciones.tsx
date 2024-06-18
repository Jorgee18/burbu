import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton,IonNavLink, IonRouterLink, IonItem, IonCheckbox, IonInput, IonLabel, IonText ,IonSearchbar, IonList, IonNote, IonIcon} from '@ionic/react';
import { useHistory } from 'react-router-dom';
//import {useForm} from 'react-hook-form';
//npm install react-hook-form
import Button from '../components/Button';
import MenuHeader from '../components/MenuHeader';
import './Publicaciones.css'

const Publicaciones = () => {
  return (
    <IonPage id='Publicaciones'>
        <MenuHeader/>
        <IonContent fullscreen>
        </IonContent>
    </IonPage>
  );
};

export default Publicaciones;