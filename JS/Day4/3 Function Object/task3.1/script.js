function checkParam(){
    try {
        for (let i = 0; i < arguments.length; i++) {
            if(arguments.length < 2 || arguments.length > 2){
                throw new RangeError('parameters exist less than or exceeds 2 parameters');
            }else{
                console.log(i);
            }
        }
    } catch (error) {
        if(error instanceof RangeError){
            console.log(error.message);
        }
    }
}