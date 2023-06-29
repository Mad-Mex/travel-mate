# Proyecto - TravelMate

## Descripción

TravelMate es una app creada con React Native Expo que permite buscar alojamiento en diferentes ciudades.
Es un proyecto creado para el curso de React Native en Coderhouse.

### Funcionalidad

-La pantalla "Welcome" permite acceder a la app a través de la creación de una cuenta o iniciando sesión.
El proceso de autentificación se realiza a partir de Firebase.
-Mediante un buscador, ubicado en la parte superior de la pantalla de "Home", el usuario podrá comenzar
a buscar un alojamiento.
-En la pantalla de "Search" se realiza el proceso de búsqueda utilizando tres parámetros: ubicación, fecha de alojamiento y número de personas. La búsqueda está limitada a 5 ciudades: Buenos Aires, Ciudad de México, Lima, Quebec y Seattle.
-La pantalla de "SearchResults" muestra los resultados disponibles junto con un mapa en tiempo real de la ciudad seleccionada.Esta funcionalidad utiliza Google Maps.
-En "HotelDetails", el usuario puede obtener información importante sobre el alojamiento: nombre, imagen y una breve descripción del hotel, número de comentarios, servicios proporcionados por hotel y precio.
-Si el usuario desea realizar una reservación, la pantalla de "Booking" le mostrará una sinopsis del hotel, así como los detalles sobre la fecha de alojamiento y el número de personas que se hospedarán. Al dar click al botón, se seteará todo esta información en el estado utilizando Redux.
-En la página "BookingCompleted" se desplegará una especie de ticket con la información del hospedaje y el número de puntos bonificados por la compra. Al presionar el botón de la parte inferior, el usuario será redirigido a la pantalla de "Home".
-Al dar click en la sección de "Viajes", en el tapbar, el usuario podrá consultar una tarjeta con la información de su viaje más reciente.
