/* TRY-CATCH */

let n = "erro"

try {
    console.log("Funcionou");
    throw new Error(n);
} catch (ex) {
    console.error("Meu erro é >>", ex.messages);
} finally {
    console.log("Acabou");
}
