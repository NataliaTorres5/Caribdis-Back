// constructor que toma el valor del status http asociado al error y saca un mensake en base a ese error 

class customError extends Error{  //nombre CustomError inherits la clase Error,  tomando los metodos de Error y le mete customizacion
    statusCode //es una propiedad customizable añadida para almacenar el estatus HTTP asociado con error
    constructor(message, statusCode = 400){ //esta es la funcion constructora para custome error que toma 2 argumentos, e mensaje y el statuscode
        super(message); // este llama al constructor de la clase padre error, pasandole mensaje como argumento lo que hace que customError herede el mensaje de error 
        this.statusCode = statusCode;  //esto caysa que la propiedad statusCode del recuen creado customError le pone como  objeto el valor provisto por lel constructor
    }
}
export default customError