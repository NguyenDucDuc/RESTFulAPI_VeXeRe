function callBackFunction(errors , value){
    if(errors){
        return new Error(errors)
    }

    // Xử lí value
    console.log(value);
    return value;
}

callBackFunction(null , "./public")