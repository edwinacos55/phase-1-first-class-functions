function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction () {
 return function nice () {
     'Nice name';
 };
}

function returnsAnAnonymousFunction () {
    return function () { 
        return 'No name?';
    };
}