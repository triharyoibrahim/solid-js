import { Loader } from '@googlemaps/js-api-loader'

export const mapLoader = new Loader({
    // apiKey: import.meta.env.VITE_APP_GOOGLE_API_KEY || 'AIzaSyCU-SCtr4kQc3yZgC2rRQbtwtZFYanfo98',
    apiKey: 'AIzaSyCU-SCtr4kQc3yZgC2rRQbtwtZFYanfo98',
    version: 'weekly',
    // libraries: ['visualization', 'places'],
    libraries: ['places'],
})

// export const defaultOption = {
//     center: { lat: -3.697249, lng: 104.849911 },
//     zoom: 15,
//     // mapId: import.meta.env.VITE_GOOGLE_MAP_ID  || '5c9fe0c439191be2'
//     mapId: '5c9fe0c439191be2'
// }

export const defaultOption = {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
}
