/* SWITCH...CASE */

    const local = "cinema";
    switch (local) {
        case "cinema":
            console.log("Entrou no cinema");
            break;
        case "quarto":
        case "sala":
            console.log("Entrou em casa");
            break;
        default:
            console.log("Qualquer valor diferente dos acima");
            break
    }