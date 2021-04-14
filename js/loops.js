/* LOOPS */

    // FOR()
        /*
            Explicação for:
                for (variável inicial; enquanto isso acontecer vai ser igual a true; adiciona +1 no i)

                Basicamente o for serve para repetir algo várias
                vezes, definimos uma variável inicial, e colocamos que
                enquanto i for menor ou igual a 5 vai ser true e sendo
                true ele executa os comandos dentro das chaves e o i++ 
                adiciona mais um enquanto for true.
        */
        for (let i = 0; i <= 5; i++) {
            console.log(i);
        }

    // FOR...IN
        let obj = { a: 1, b: 2, c: 3};
        
        for (let prop in obj) {
            console.log(prop);
        }

    // FOR...OF 
        let iterable = [
            { name: "Sophia", admin: true },
            { name: "Valéria", admin: true },
            { name: "Khrisna", admin: true },
        ];

        for (const value of iterable) {
            console.log(value);
            console.log(value.name);
            console.log(value.admin);
        }