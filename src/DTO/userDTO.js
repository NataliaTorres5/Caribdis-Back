
function userDTO(user, token){
    return {
        data:{
            "id": user.id,  
            "firstName": user.firstName,
            "lastName": user.lastName,
            "email": user.email,
            "role": user.role,
            "country": user.country,
            "address":user.address,
            "img":user.img
        },
      
            "token": token
        };
    }


export default userDTO