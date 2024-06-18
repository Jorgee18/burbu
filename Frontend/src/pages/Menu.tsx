import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton,IonNavLink, IonRouterLink, IonItem, IonCheckbox, IonInput, IonLabel, IonText} from '@ionic/react';
import { useHistory } from 'react-router-dom';
//import {useForm} from 'react-hook-form';
//npm install react-hook-form
import Header from '../components/Header';
import MenuHeader from '../components/MenuHeader';
import Button from '../components/Button';
import './Menu.css';
import '../theme/variables.css';

const Menu: React.FC = () => {
  const history = useHistory();

  const handleNavigation = (path: any) => {
      history.push(path);
  };

  return (
    <IonPage id='Menu'>
      <MenuHeader/>
      <IonContent fullscreen >
        <div className="menu-container">
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Menu;


//<span className="d-flex justify-content-end"><a href="temperaturaCelsius.html"><img src="../public/temperatura.png" alt=""/></a></span>