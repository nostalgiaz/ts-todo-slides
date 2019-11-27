class Asino {
    verso = 'Hiii';
    zampe = 4;
}

class Umano {
    simpatico = false;
    zampe = 2;
}

function doStuff(arg: Asino | Umano) {
    if (arg instanceof Asino) {
        console.log(arg.verso);
        console.log(arg.zampe);
    } 
    // else
}
