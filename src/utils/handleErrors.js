// funcion que maneja errores que ocurren en app web. esta funcion se encarga de registrar en la consola y enviar respuesta a decuada a usuario

function handleErrors (error, req, res, next) { //error: error que produjo objeto, req: objeto de solicitud http, res, respuesta de http, next,, funcion para continuar con el siguietne controlador o middleare

    console.log(error, "error que viene desde handleError js"); //imprime error en consola para ver que se produjo y donde
    res.status(error.statusCode).json({error:true, message: error.message})// res.status(---) establece qul codigo de estado drespuesta .json(---) envia respuesta json al usuario  con propiedad error que es un booleano que dice si el error es cierto, se envia mensake error 
}
export default handleErrors;