# Prueba Técnica Frontend Axpe Consulting

## Ejercicio 1
> Si en un futuro se agrega un nuevo tipo de precio, tendremos que modificar el constructor entero, la opción que propongo es una función que por defecto devuelva el additionalfee y dentro los condicionales necesarios con el return. Esta función la llamaríamos debajo de multimediaContent e iríamos incrementando el precio a medida que el forEach va saltando de posiciones.

~~~
class RegisteredUser{
    constructor(services = []) {
        this.services = services
    }

    getTotal() {
      let total = 0
      this.services.forEach(service, index => {
        let multimediaContent = service.getMultimediaConent()
        total += this.getPriceContent(multimediaContent)
      })
      return total
    }

    getPriceContent(multimediaContent) {
      if (typeof service == StreamingService) {
        return multimediaContent.streamingPrice
      } else if (typeof service == StreamingService) {
        return multimediaContent.streamingPrice
      }
        return multimediaContent.additionalFee
    }

  }
~~~
## Ejercicio 2
El proyecto se puede ejecutar haciendo un git clone del repositiorio de este propio github. Lo unico que se necestia es instalar los node_modules con el comando 'npm i'.

Me han faltado algunas cosas que quería implementar como el InfoWindow o un propio helper que se encargaba de dar la Lat y Lng de los markers.

Si en algún momento el proyecto no funciona es porque la API de Google ha dejado de funcionar o ya no existe para eso se tendrá que crear otra [API GOOGLE](https://developers.google.com/maps/documentation/javascript/get-api-key).
Puntos a tener en cuenta al crear la API se necesita agregar un método de facturación, se tienen que habilitar los siguientes servicios para que funcione correctamente:
___
- Geocoding API
- Maps JavaScript API