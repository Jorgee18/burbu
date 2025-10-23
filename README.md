# burbu
<div align="center">

![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=flat)
![Figma](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=fff&style=flat)
![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff&style=flat)
![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=fff&style=flat)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=flat)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat)
![VSCode](https://img.shields.io/badge/Visual_Studio_Code-007ACC?logo=visual-studio-code&logoColor=fff&style=flat)
![iOS](https://img.shields.io/badge/iOS_Development-000000?logo=ios&logoColor=fff&style=flat)
![Android](https://img.shields.io/badge/Android_Development-3DDC84?logo=android&logoColor=fff&style=flat)


</div>
<div class="project">

  <h3>Integrantes</h3>
  <ul>
    <li>Jorge Villarreal</li>
    <li>Elias Bernales</li>
    <li>Fernando Arancibia</li>
    <li>Felipe Zepeda</li>
  </ul>

  <h3>Descripción</h3>
  <p>
    Burbu es una aplicación móvil que conecta usuarios según las zonas que frecuentan,
    facilitando la compra y venta de productos locales, la creación de eventos y la
    comunicación a través de chats comunitarios. Optimiza la interacción local y reduce
    la dependencia de servicios de envío o pagos externos.
  </p>

  <h3>Funcionalidades</h3>
  <ul>
    <li><strong>Inicio de sesión y registro:</strong> Permite crear cuentas o ingresar con credenciales, gestionando datos personales y ubicación.</li>
    <li><strong>Grupos locales:</strong> Agrupa automáticamente usuarios según zonas frecuentes.</li>
    <li><strong>Gestión de productos:</strong> Publicar, editar y eliminar productos dentro de grupos locales.</li>
    <li><strong>Gestión de eventos:</strong> Crear, unirse o gestionar eventos basados en zonas frecuentes.</li>
    <li><strong>Chat local y directo:</strong> Comunicación dentro de grupos y chat directo entre usuarios.</li>
    <li><strong>Notificaciones y alertas:</strong> Historial de actividades relevantes con detalles de eventos, productos y mensajes.</li>
  </ul>

  <h3>Estructura de Datos</h3>
  <ul>
    <li><strong>Usuario:</strong> Nombre, correo electrónico, RUT, región, comuna y contraseña.</li>
    <li><strong>Región y Comuna:</strong> Cada usuario pertenece a una comuna, cada comuna a una región.</li>
    <li><strong>Producto:</strong> Identificador, nombre, descripción, precio y estado.</li>
    <li><strong>Evento:</strong> Identificador, título, descripción, fecha y ubicación.</li>
    <li><strong>Notificación:</strong> Identificador, fecha, hora y descripción.</li>
  </ul>

  <h3>Base de Datos</h3>
  <p>
    Se utilizará PostgreSQL, aprovechando su escalabilidad y capacidad para manejar
    relaciones entre usuarios, grupos, productos, eventos y notificaciones.
  </p>

  <h3>Patrones de Diseño</h3>
  <ul>
    <li><strong>Back button:</strong> Navegación histórica entre pantallas.</li>
    <li><strong>Inline Validation:</strong> Validación en tiempo real de formularios.</li>
    <li><strong>Toggle Switch Pattern:</strong> Cambio entre diferentes vistas o estados.</li>
    <li><strong>Notification List:</strong> Lista de notificaciones ordenadas cronológicamente.</li>
  </ul>
</div>
