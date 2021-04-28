//Exo 1
// function reverseNumber(param) {
//     return +(param.toString().split("").reverse().join(""))

// }
// console.log(reverseNumber(158));
//peut importe l'élément il le transforme en String,puis le separe en tableau(separe seulement les string),puis renverse,puis recole le tout

//Exo 2
// function divPar2(params) {
//     let x=params%2
//     let y =params/2
//     switch (x) {
//         case x=0:
//             return console.log(`Le nombre ${params} est divisible par 2. ${params}/2 = ${y}`);
//         default:
//             console.log("Nombre non divisible par 2");
//             break;
//     }
// }
// divPar2(16)

//Exo 3
function login(par) {
    par=prompt('Quel est votre mot de passe?');
        while (par!="mdp") {
            par=prompt('Reesayez.Quel est votre mot de passe?')
            if (par=="mdp") {
                alert('Vous êtes connecté')}
        }
    return par
}
login()