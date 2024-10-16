const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });


// rl.question('votre prénom ?', (response) => {
//     console.log(response)
    
// })
let contacts = []

const command = () => {
    console.log('Hey Sir, I\'m your directory!')
    console.log('Enter /help to display a list of commands.')
    console.log('Otherwise just enter any existing command.')
    rl.question('votre commande : ', (cmd) => {
        switch (cmd) {
            case '/help':
                help()
                break
            case '/add':
                add()
                break
            case '/list':
                list()
                break
            case '/delete':
                deleteContact()
                break
            case '/stop':
                stop()
                break
            default:
                console.log('commande non reconnue')
                command()
            
        }
        
    })
}

const help = () => {
    console.log('Liste des commandes :')
    console.log('/help : affiche la liste des commandes')
    console.log('/add : liste le contenu du dossier')
    console.log('/list : liste le contenu du dossier')
    console.log('/delete : liste le contenu du dossier')
    console.log('/stop : ferme le programme')
    command()
}



const add = () => {
    const firstName = () => {
      
        
        rl.question('Enter your first name : ', (firstName) => {
            lastName(firstName)
        })
    }
    const lastName = (firstName) => {
        rl.question('Enter your last name : ', (lastName) => {
            phone(firstName, lastName)
        })
    }
    const phone = (firstName, lastName) => {
        rl.question(`What is the phone number for ${firstName} ${lastName} : `, (phone) => {
            let contact = {
                id: contacts.length + 1,
                firstName: firstName,
                lastName: lastName,
                phone: phone
            }
            contacts.push(contact)
            console.log(`'Your contact ${firstName} ${lastName} has been successfully added to the direstory'`)
            command()
        })
    }
    firstName();
}


const list = () => {
    if (contacts.length === 0) {
        console.log('No contact in the directory')
    } else {
        console.log('List of contacts :')
        contacts.forEach(contact => {
            console.log(`${contact.id} - ${contact.firstName} ${contact.lastName} : ${contact.phone}`)
        })
    }
    command()
}

const deleteContact = () => {
    if (contacts.length === 0) {
        console.log('No contact in the directory')
    } else {
        rl.question('Enter the id of the contact you want to delete : ', (id) => {
            contacts = contacts.filter(contact => contact.id != id)
            console.log(`The contact with the id ${id} has been successfully deleted`)
            list()
        })
    }
}

const stop = () => {
    console.log('Goodbye Sir!')
    rl.close()
}


command()

