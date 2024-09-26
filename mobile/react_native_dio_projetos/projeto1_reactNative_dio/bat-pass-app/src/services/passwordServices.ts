export default function generatePass() {
    let password: string = ''
    let characters: string = '@$#123456789abcdifghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ!'
    let passWordLength = 8

    for (let index = 0; index < passWordLength; index++) {
         password += characters.charAt(
            Math.floor(Math.random() * characters.length)
         )
    }

    return password
}