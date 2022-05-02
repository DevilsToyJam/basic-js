function getEmailDomain(email) {
    email = email.split('')
    for (let i = email.length; i > 0; i--) {
        if (email[i] === '@') {
            return email.slice(i + 1, email.length).join('')  
        }
    }
}

console.log(getEmailDomain('very.unusual.@.unusual.com@usual.com'))