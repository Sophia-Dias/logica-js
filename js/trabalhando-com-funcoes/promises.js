/* PROMISES */

const promessa = new Promise((resolve, reject) => {
    return setTimeout(() => {
        resolve("Executou");
    }, 1000);
});

const p = promessa
    .then ((res) => {
        console.log("res: ", res);
        return res;
    })
    .then ((val) => {
        console.log("val: ", val);
    })
    .catch((err) => {
        console.log("err: ", err);
    });
