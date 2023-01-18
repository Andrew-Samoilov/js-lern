console.log(' -  * test * - '); // console.log(' -  * CodeWars *  * - ');

let expression = 'index===5';

console.log(`expression `, expression);
for (let index = 0; index < 10; index++) {
    if (eval(expression)) {
        console.log(`expression works !`, expression);
    }
    
}
