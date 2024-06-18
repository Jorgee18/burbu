import './MenuHeader.css';
import { IonContent, IonButton, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton} from '@ionic/react';
import '../theme/variables.css';
import { useHistory } from 'react-router-dom';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Route, Redirect } from 'react-router';

import { playCircle, radio, library, search } from 'ionicons/icons';
import Grupos from '../pages/Grupos';


const MenuHeader: React.FC = () => {

    const history = useHistory();

    const gruposClick = () => {
    
        history.push('/grupos');
    };

    const publicacionesClick = () => {
    
        history.push('/publicaciones');
    };

    const eventosClick = () => {
        history.push('/eventos');
    }; 
    return (
  <>
    <IonHeader>
      <IonToolbar className="barraS">

        <IonButton fill="clear">                                                                   
            <a onClick={gruposClick}>Grupos</a>
        </IonButton>

        <IonButton fill="clear">
            <a onClick={publicacionesClick}>Publicaciones</a>
        </IonButton>

        <IonButton fill="clear">
            <a onClick={eventosClick}>Eventos</a>
        </IonButton>

      </IonToolbar>
    </IonHeader>
  </>
  );
};

export default MenuHeader;