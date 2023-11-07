function calcBMI() {
    const vaha = parseInt(document.getElementById("weight").value)
    const vyska = parseInt(document.getElementById("height").value)
    var x = document.getElementById("check").checked;

    if (vaha <= 0 || vyska <= 0 ) {
        document.getElementById("result").innerHTML = "Nesprávný input";
        return;
    }


    const result = (vaha / vyska**2) * 10000

    if (result < 18.5 && x == true) {
        document.getElementById("result").innerHTML = "Podváha";
    }   else if (result >= 18.5 && result < 25 && x == true) {
        document.getElementById("result").innerHTML = "Normální váha";
    } else if (result >= 25 && result < 30 && x == true) {
        document.getElementById("result").innerHTML = "Nadváha";
    } else if (result > 30 && x == true) {
        document.getElementById("result").innerHTML = "Obezita";
    }

    console.log(result)
}

const barva = ["cervena", "oranzova", "zelena"]

function startSem() {
    var x = document.getElementById("check").checked;

    for(i = 0; i < barva.length; i++) {
        setTimeout(function() {
            document.getElementById("semaforr").style.background = "red";
        }, 0);
        setTimeout(function() {
            document.getElementById("semaforo").style.background = "orange";
        }, 5000);
        setTimeout(function() {
            document.getElementById("semaforr").style.background = "white";
            document.getElementById("semaforo").style.background = "white";
            document.getElementById("semaforg").style.background = "green";
        }, 7000);
        setTimeout(function() {
            document.getElementById("semaforg").style.background = "white";
            document.getElementById("semaforo").style.background = "orange";
        }, 11000);
        setTimeout(function() {
            document.getElementById("semaforo").style.background = "white";
            document.getElementById("semaforr").style.background = "red";
            if ( x == true ) {
                startSem()
            } else {
                errorSem()
                return;
            }
        }, 13000);
    }
}

function errorSem(){
    var x = document.getElementById("check").checked;

    for(i = 0; i < barva.length; i++) {
        setTimeout(function() {
            document.getElementById("semaforr").style.background = "white";
            document.getElementById("semaforo").style.background = "white";
            document.getElementById("semaforg").style.background = "white";
        }, 1000);
        setTimeout(function() {
            document.getElementById("semaforo").style.background = "orange";
        }, 2000);
        setTimeout(function() {
            if ( x == true ) {
                document.getElementById("semaforr").style.background = "white";
                document.getElementById("semaforo").style.background = "white";
                document.getElementById("semaforg").style.background = "white";
                startSem()
                return;
            } else {
                errorSem()
            }
        }, 3000);
    }
}