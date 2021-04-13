/* DECLARAÇÃO DE VARIÁVEIS */

    /* 
        Uma variável é case-sensitive.
        Isso significa que nomes com letras maiúsculas são diferentes de
        nomes com letras minúsculas: para um programa em JavaScript, Nome
        é diferente de nome.
    */

    /* CARACTERES VÁLIDOS */
        // Palavras: 
            /*    
                Embora a maioria dos navegadores já reconheça uma
                variedade de caracteres UTF-8 (como palavras com acentos e
                símbolos, por exemplo), o recomendado é o uso apenas de letras
                MAIÚSCULAS e minúsculas, sem acentos e espaços.
            */
           let meuNOME = "Sophia";
           let meunome = "Sophia";
           let MeuNoMe = "Sophia";
           // Não é recomendado, mas funciona
           let 𓅓 = "Simbolo";

        // Números:
            /*
                Desde que sejam precedidos por uma ou mais letras.
            */
           var heroina1 = "Mulher Maravilha";
           var heroi230fraco = "Batman";

        // Underline e Cifrão
            /*
                Os underlines "_" e os cifrões "$" também são permitidos em
                qualquer posição, mas são poucos usados.
            */
           const _nome = "Sophia";
           const segundo_nome = "Santos";
           const $ultimo_nome_ = "Dias";
        
    /* CARACTERES INVÁLIDOS */

        // Nomes Reservados
            /*
                Alguns nomes não podem ser utilizados para criação de 
                variáveis pois estão reservados de alguma forma à linguagem.
            */
