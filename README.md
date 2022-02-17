# Prueba Técnica Frontend Axpe Consulting

## Ejercicio 1
> Si en un futuro se agrega un nuevo tipo de precio tendremos que modificar el constructor entero, la opción que propongo es una funcion que por dedfcto devuelva el additionalfee y dentro los condicionales necesarios con el return. Esta funcion la llamariamos debajo de multimediaContent y iriamos icrementando el precio a medida que el forEach va saltando de posiciones.

`class RegisteredUser{

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

  }`
## Ejercicio 2
