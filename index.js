function receivesAFunction(callback){
    return callback()
}

function returnsANamedFunction () {
    return function random(){}
}

function returnsAnAnonymousFunction(){
    return function(){}
}