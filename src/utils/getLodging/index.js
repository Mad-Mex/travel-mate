import { locations } from "../../constants"
 
export const getLodgingByCity = ( city ) => {

    return new Promise ((resolve, reject) => {

        setTimeout(() => {

            const lodging = locations.filter( location => location.city == city )

            if(lodging) {
                resolve(lodging)

            } else {
                reject(console.log("No se pudieron obtener los resultados"))
            }
            
        }, 2500);
    })
}