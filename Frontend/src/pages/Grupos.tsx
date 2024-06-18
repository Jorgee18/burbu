import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton,IonNavLink, IonRouterLink, IonItem, IonCheckbox, IonInput, IonLabel, IonText ,IonSearchbar, IonList, IonNote, IonIcon} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { chevronForward, listCircle } from 'ionicons/icons';
//import {useForm} from 'react-hook-form';
//npm install react-hook-form
import Button from '../components/Button';
import MenuHeader from '../components/MenuHeader';
import './Grupos.css'

const Grupos = () => {
  return (
    <IonPage id='Grupos'>
      <MenuHeader/>
      <IonContent fullscreen color="light">
        <h1><strong>Grupos actuales</strong></h1>
        <IonList inset={true}>
          <IonItem button={true}>
            <IonIcon color="danger" slot="start" icon={listCircle} size="large"></IonIcon>
            <IonLabel>Valparaiso</IonLabel>
          </IonItem>
          <IonItem button={true}>
            <IonIcon color="tertiary" slot="start" icon={listCircle} size="large"></IonIcon>
            <IonLabel>Viña del mar</IonLabel>
          </IonItem>
          <IonItem button={true}>
            <IonIcon color="success" slot="start" icon={listCircle} size="large"></IonIcon>
            <IonLabel>Reñaca</IonLabel>
          </IonItem>
          <IonItem button={true}>
            <IonIcon color="warning" slot="start" icon={listCircle} size="large"></IonIcon>
            <IonLabel>Villa Alemana</IonLabel>
          </IonItem>
        </IonList>

        <h2><strong>Grupos cercanos</strong></h2>
        <IonList inset={true}>
          <IonItem button={true}>
            <IonIcon color="danger" slot="start" icon={listCircle} size="large"></IonIcon>
            <IonLabel>Casablanca</IonLabel>
          </IonItem>
          <IonItem button={true}>
            <IonIcon color="tertiary" slot="start" icon={listCircle} size="large"></IonIcon>
            <IonLabel>Portales</IonLabel>
          </IonItem>
          <IonItem button={true}>
            <IonIcon color="success" slot="start" icon={listCircle} size="large"></IonIcon>
            <IonLabel>Recoleta</IonLabel>
          </IonItem>
          <IonItem button={true}>
            <IonIcon color="warning" slot="start" icon={listCircle} size="large"></IonIcon>
            <IonLabel>Pucon</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Grupos;