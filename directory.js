const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });


rl.question('votre prénom ?', (response) => {
    console.log(response)
    
})


const command = () => {
    rl.question('votre commande :  ', (cmd) => {
        switch (cmd) {
            case '/help':
                help()
                break;
            case '/add':
                console.log('ajout')
                command()
                break;
            default:
                console.log('commande non reconnue')
                command()
            
        }
        
    })
}

const help = () => {
    console.log('Liste des commandes :')
    console.log('/help : affiche la liste des commandes')
    console.log('/stop : ferme le programme')
    console.log('/list : liste le contenu du dossier')
    console.log('/add : liste le contenu du dossier')
    console.log('/delete : liste le contenu du dossier')
    command()
}




command()

