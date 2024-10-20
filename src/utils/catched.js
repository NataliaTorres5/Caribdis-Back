//middleware encargado de actuarde forma general como un trycatch 
//

function catched(fn){
    return function(req, res, next){
        fn(req, res).catched(err=> next(err, "error atrapado por en catched js"))
    }
}

export default catched