import React from 'react'
const User = (name,type) =>{
    return(
        <div>
            <h1>
                Welcome {name} logdin as {type} </h1>
        </div>
    )
}
export default User;
<User uname ="Vignesh" type= "Student"/ >