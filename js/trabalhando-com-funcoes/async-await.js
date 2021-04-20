/* ASYNC AWAIT */

const somar = (num) => num + num;
const error = (msg) => `Erro de ${msg}`;

async function calcular(num) {
    let value;
    try {
        value = await somar(num);
    } catch (e) {
        value = await erro(e);
    }
    return value;
}

calcular(10).then (res => console.log("res :>>", res));