# Contexto del proyecto

## Objetivo

Construir una experiencia de reservas de alojamientos inspirada en Airbnb, con un flujo simple que permita descubrir destinos, comparar opciones y revisar un alojamiento antes de reservar. La interfaz debe priorizar fotografías, claridad en la información y acciones de búsqueda visibles.

## Páginas principales

### 1. Página de inicio y exploración

Es la primera vista de la plataforma. Su objetivo es ayudar al usuario a iniciar una búsqueda desde el destino o desde una categoría de viaje. Debe transmitir variedad de alojamientos y facilitar el acceso a búsquedas recientes o populares.

**Qué mostrará:**

- Encabezado con logotipo, navegación principal y acceso a registro, inicio de sesión y menú de usuario.
- Buscador destacado con destino, fechas, cantidad de huéspedes y acción para buscar.
- Categorías de alojamiento o experiencias, como playa, montaña, ciudades, diseño y espacios únicos.
- Secciones de alojamientos recomendados, destinos populares y opciones cercanas.
- Tarjetas con imagen, ubicación, nombre, valoración, precio por noche y estado de favorito.
- Pie de página con enlaces de ayuda, privacidad, condiciones y selección de idioma o moneda.

**Componentes principales:**

- `Header` y navegación global.
- `SearchBar` o buscador compuesto por destino, fechas y huéspedes.
- `CategoryTabs` para filtrar por tipo de viaje.
- `ListingSection` para agrupar alojamientos.
- `ListingCard` con imagen, datos resumidos y botón de favorito.
- `Carousel` o galería horizontal para recorrer recomendaciones.
- `Footer` con enlaces secundarios.

### 2. Página de resultados de búsqueda

Esta vista aparece después de realizar una búsqueda. Su objetivo es permitir que el usuario compare rápidamente los alojamientos disponibles y refine los resultados según sus necesidades y presupuesto.

**Qué mostrará:**

- Resumen de la búsqueda activa: destino, fechas y número de huéspedes.
- Barra de filtros para precio, tipo de alojamiento, habitaciones, servicios y accesibilidad.
- Ordenamiento por relevancia, precio, valoración o distancia.
- Listado de resultados en tarjetas con fotografías, ubicación, título, servicios, valoración y precio total o por noche.
- Mapa interactivo con marcadores de precio para relacionar cada alojamiento con su ubicación.
- Estados de carga, resultados vacíos y mensajes cuando los filtros no encuentran opciones.
- Paginación o carga progresiva para consultar más alojamientos.

**Componentes principales:**

- `SearchSummary` con los criterios actuales.
- `FilterBar` y `FilterModal` para filtros en escritorio y móvil.
- `SortMenu` para cambiar el orden de los resultados.
- `ResultsGrid` o lista responsive de alojamientos.
- `ListingCard` reutilizable con interacción de favorito.
- `MapView` con marcadores y selección de alojamientos.
- `EmptyState` para búsquedas sin resultados.
- `Pagination` o control de carga progresiva.

### 3. Página de detalle y reserva

Esta vista presenta toda la información necesaria para decidir si reservar un alojamiento. Debe combinar una galería visual atractiva con datos concretos, confianza y un resumen de precios siempre accesible.

**Qué mostrará:**

- Galería principal de fotografías del alojamiento con opción de abrir la vista completa.
- Nombre del alojamiento, ubicación, valoración, número de reseñas y botón para compartir o guardar.
- Descripción del anfitrión y de la propiedad.
- Servicios incluidos, distribución de habitaciones y reglas de la casa.
- Información del anfitrión y señales de confianza, como identidad verificada o reseñas.
- Sección de reseñas con valoración general, categorías y comentarios destacados.
- Ubicación aproximada en un mapa y puntos de interés cercanos.
- Panel de reserva con fechas, huéspedes, desglose de precio, tarifas, total y botón principal para reservar.
- Avisos de disponibilidad, validación de fechas y confirmación de la acción.

**Componentes principales:**

- `PhotoGallery` o galería de imágenes.
- `ListingHeader` con título, ubicación, valoración y acciones.
- `HostInfo` con datos del anfitrión.
- `AmenitiesList` para servicios y comodidades.
- `HouseRules` con condiciones del alojamiento.
- `ReviewsSection` y resumen de valoraciones.
- `LocationMap` con ubicación y alrededores.
- `BookingCard` con selector de fechas, huéspedes y cálculo de precio.
- `PrimaryButton` para iniciar la reserva.
- `ShareDialog` y control de favoritos.

## Usuario objetivo

El usuario es una persona que busca un alojamiento temporal para vacaciones, trabajo o una escapada y quiere resolver la búsqueda con confianza y poco esfuerzo. Necesita descubrir opciones que se ajusten a su destino, fechas, presupuesto y preferencias, comparar alternativas de forma visual y conocer los detalles importantes antes de reservar. La plataforma debe ayudarle a pasar de la inspiración a una decisión informada y segura.
