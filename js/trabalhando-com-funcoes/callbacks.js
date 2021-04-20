/* CALLBACKS */

function principal(callback, arg) {
    console.log("Meu resultado é:", callback + arg);
}

function callback(num) {
    return num + num
}

principal(callback(10), 50)

const fazerAlgo = function() {
    console.log("O seu tempo chegou ao fim");
};

setTimeout(fazerAlgo, 2000)

// Nosso pârametro (que pode ser outro nome)
function ObterUser(callback) {
    try {
        setTimeout(() => {
            // Passamos null como erro e o return é o nosso success
            return callback (null, {
                id: 1,
                nome: "Sophia",
            })
        }, 1000)
    } catch (err) {
        console.log("Entrou aqui");
        return callback(err.message, null)
    }
}

function MeuCallback(error, resultado) {
    // Log do nosso resultado
    console.log("Meu resultado", resutado);
    console.log("Error", error);
}

ObterUser(MeuCallback);