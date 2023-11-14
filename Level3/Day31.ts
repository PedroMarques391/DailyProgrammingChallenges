interface Udomains {
    [key : string] : string[]
}

const emails: string[] = [
    'user1@gmail.com', 'user2@gmail.com', 
    'user1@hotmail.com', 'user2@hotmail.com',
    "user2@yahoo.com", "user5@outroDominio.com"
]

function order (arr: string[]): Udomains {
    const domains: Udomains = {
        '@gmail.com' : [],
        '@hotmail.com' : [],
        '@outros' : []
    }

    for (let i = 0; i < arr.length; i++) {
        if(arr[i].includes('@gmail.com')) {
            domains['@gmail.com'].push(arr[i]);
        } else if (arr[i].includes("@hotmail.com")) {
            domains['@hotmail.com'].push(arr[i]);
        } else {
            domains['@outros'].push(arr[i]);
        }
    }    
    return(domains)
}

console.log(order(emails))