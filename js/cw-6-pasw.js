console.log(" -  * CodeWars * Password generator * - ");
console.log();

function passwordGen() {
    const letter4Pass = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let pass = [];
    // Math.floor(Math.random() * (max - min) + min);

    const generateRandomString = (myLength) => {
        const chars =
            "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
        const randomArray = Array.from(
            { length: myLength },
            (v, k) => chars[Math.floor(Math.random() * chars.length)]
        );

        const randomString = randomArray.join("");
        return randomString;
    };
    let pasLen = Math.floor(Math.random() * (21 - 6) + 6);
    console.log(`Pass len ${pasLen}`);
    // console.log(`generateRandomString(pasLen) ${generateRandomString(pasLen)}`);

    return generateRandomString(pasLen);
}

console.log(passwordGen());