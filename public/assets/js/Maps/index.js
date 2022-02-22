


mapboxgl.accessToken = 'pk.eyJ1IjoiZGVsbWFuYXQiLCJhIjoiY2t6eGN4ZGkyMDA5dTJxazE4eWR5am00diJ9.Hd69vBUgB8SXIs7m_TFaGA';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/navigation-night-v1',
center: [-95.48881,29.98903],
zoom: 11
});
 
map.addControl(
new MapboxDirections({
accessToken: mapboxgl.accessToken
}),
'bottom-left'
);