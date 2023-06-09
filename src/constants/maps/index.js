import { MAPS_API } from "@env"


export const MAPS_API_KEY= MAPS_API

export const URL_MAPS = ( lat, lng, zoom = 12 ) => 
	`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=600x300&maptype=roadmap
	&markers=color:blue%7Clabel:S%7C${lat},${lng}&key=${MAPS_API_KEY}`


export const URL_GEOCODING = ( address ) =>
	`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${MAPS_API_KEY}`	


export const URL_REVERSE_GEOCODING = ( lat, lng ) => 
	`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${MAPS_API_KEY}`



