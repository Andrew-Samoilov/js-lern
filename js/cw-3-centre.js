console.log(' -  * CodeWars * Centre of attention * - ');

function central_pixels(img, colour) {

    function drawImage(im = Image) {
        console.log(`function drawImage. W=${im.width}, H=${im.height}, colour = ${colour}.`);
        let tmpRes = [];
        let numHeight = 1;
        for (let i = 1; i <= im.pixels.length; i++) {
            tmpRes.push(im.pixels[i - 1]);
            // console.log(`i% i.width ${i% i.width}` );
            if (i % im.width === 0) {
                console.log(`${numHeight++}`, tmpRes);
                tmpRes = [];
            }
        }
    }

    let res = [1];
    let maxAttention = -2;
    let pix = img.pixels;
    drawImage(img);

    function pixAtt(coord) { // функція для визначення глибини пікселя
        for (let j = 0; j < pix.length; j++) {
            /* дивимся по сторонам, циклом змінємо довжину погляду,
               до pix.length не дійдемо, просте обмеження */

        }

    }

    for (let i = 0; i < pix.length; i++) {
        // console.log(`pix[${i}] ${pix[i]}`);

        // cпівпадає з тим, шо шукаємо, робимо
        if (pix[i] === colour) {
            console.log(` pix[${i}] = colour| ${colour}  pixAtt(${i}) ${pixAtt(i)} `);





        } else {
            pix[i] = 0;
        }


    }
    // drawImage(pix);
    console.log(...res);
    return Math.max(...pix);
}

class Image {
    constructor(data, w, h) {
        this.pixels = data.slice();
        this.width = w;
        this.height = h;
    }
}

let ascending = (a, b) => a - b;

let picture = new Image(
    [1, 1, 4, 4, 4, 4, 2, 2, 2, 2, // prettier-ignore
        1, 1, 1, 1, 2, 2, 2, 2, 2, 2,
        1, 1, 1, 1, 2, 2, 2, 2, 2, 2,
        1, 1, 1, 1, 1, 3, 2, 2, 2, 2,
        1, 1, 1, 1, 1, 3, 3, 3, 2, 2,
        1, 1, 1, 1, 1, 1, 3, 3, 3, 3], 10, 6);
let imag;
let picture2 = new Image(
    [1, 1, 1, 1, 1, 1, 1, 1, 2, 1, // prettier-ignore
        1, 1, 1, 1, 1, 1, 1, 2, 1, 1,
        1, 1, 1, 1, 1, 1, 2, 2, 2, 2,
        1, 1, 1, 1, 1, 1, 1, 2, 2, 2,
        1, 1, 1, 1, 1, 1, 1, 3, 2, 2,
        1, 1, 1, 1, 1, 1, 1, 3, 2, 2,
        1, 1, 1, 1, 1, 1, 1, 3, 3, 3], 10, 7);
let picture4 = new Image(// prettier-ignore
    [5, 5, 5, 5, 6, 6, 5, 5, 5, 5, 5, 5, 7, 7, 5, 5, 5, 7, 7, 6, 6, 5, 5, 7, 7, 7, 7, 7, 7,
        5, 5, 5, 5, 6, 6, 5, 5, 5, 5, 5, 5, 7, 7, 5, 5, 5, 7, 7, 6, 6, 5, 5, 7, 7, 7, 7, 7, 7,
        5, 5, 5, 5, 6, 6, 5, 5, 5, 5, 5, 5, 7, 7, 5, 5, 5, 7, 7, 6, 6, 5, 5, 7, 7, 7, 7, 7, 7,
        5, 5, 5, 5, 7, 7, 6, 6, 6, 6, 6, 6, 7, 7, 6, 6, 6, 5, 5, 5, 5, 7, 7, 7, 7, 6, 6, 6, 6,
        7, 7, 7, 7, 6, 6, 7, 7, 7, 7, 5, 5, 5, 5, 5, 5, 5, 7, 7, 6, 6, 7, 7, 5, 5, 6, 6, 6, 6,
        7, 7, 7, 7, 6, 6, 7, 7, 7, 7, 5, 5, 5, 5, 5, 5, 5, 7, 7, 6, 6, 7, 7, 5, 5, 6, 6, 6, 6,
        7, 7, 7, 7, 6, 6, 7, 7, 7, 7, 5, 5, 5, 5, 5, 5, 5, 7, 7, 6, 6, 7, 7, 5, 5, 6, 6, 6, 6,
        7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 5, 5, 7, 7, 5, 5, 5, 5, 5, 7, 7, 7, 7, 6, 6, 5, 5, 5, 5,
        7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 5, 5, 7, 7, 5, 5, 5, 5, 5, 7, 7, 7, 7, 6, 6, 5, 5, 5, 5,
        5, 5, 5, 5, 6, 6, 5, 5, 5, 5, 6, 6, 5, 5, 7, 7, 7, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7,
        5, 5, 5, 5, 6, 6, 5, 5, 5, 5, 6, 6, 5, 5, 7, 7, 7, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7,
        5, 5, 5, 5, 6, 6, 5, 5, 5, 5, 6, 6, 5, 5, 7, 7, 7, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7,
        5, 5, 5, 5, 6, 6, 5, 5, 5, 5, 6, 6, 5, 5, 7, 7, 7, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7,
        5, 5, 5, 5, 6, 6, 5, 5, 5, 5, 6, 6, 5, 5, 7, 7, 7, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7,
        7, 7, 7, 7, 5, 5, 5, 5, 5, 5, 7, 7, 6, 6, 7, 7, 7, 7, 7, 6, 6, 7, 7, 6, 6, 7, 7, 7, 7,
        7, 7, 7, 7, 5, 5, 5, 5, 5, 5, 7, 7, 6, 6, 7, 7, 7, 7, 7, 6, 6, 7, 7, 6, 6, 7, 7, 7, 7,
        7, 7, 7, 7, 5, 5, 5, 5, 5, 5, 7, 7, 6, 6, 7, 7, 7, 7, 7, 6, 6, 7, 7, 6, 6, 7, 7, 7, 7,
        6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 7, 7, 5, 5, 6, 6, 6, 6, 6, 7, 7, 5, 5, 6, 6, 5, 5, 5, 5,
        6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 7, 7, 5, 5, 6, 6, 6, 6, 6, 7, 7, 5, 5, 6, 6, 5, 5, 5, 5,
        5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 5, 5, 7, 7, 7, 5, 5, 7, 7, 6, 6, 5, 5, 6, 6, 6, 6,
        5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 5, 5, 7, 7, 5, 5, 5, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5,
        5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 5, 5, 7, 7, 5, 5, 5, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5,
        5, 5, 5, 5, 6, 6, 7, 7, 7, 7, 5, 5, 7, 7, 5, 5, 5, 5, 5, 5, 5, 6, 6, 7, 7, 7, 7, 7, 7,
        5, 5, 5, 5, 6, 6, 7, 7, 7, 7, 5, 5, 7, 7, 5, 5, 5, 5, 5, 5, 5, 6, 6, 7, 7, 7, 7, 7, 7,
        5, 5, 5, 5, 6, 6, 7, 7, 7, 7, 5, 5, 7, 7, 5, 5, 5, 5, 5, 5, 5, 6, 6, 7, 7, 7, 7, 7, 7,
        5, 5, 5, 5, 6, 6, 7, 7, 7, 7, 5, 5, 7, 7, 5, 5, 5, 5, 5, 5, 5, 6, 6, 7, 7, 7, 7, 7, 7,
        7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 6, 6, 7, 7, 7, 7, 6, 6, 7, 7, 7, 7,
        7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 6, 6, 7, 7, 7, 7, 6, 6, 7, 7, 7, 7], 29, 27);
let picture5 = new Image(
    [8, 8,
        7, 8], 2, 2);

imag = picture;

// console.log(central_pixels(imag, 2), `!!`);
// Only one red pixel has the maximum depth of 3:
let red_ctr = [32];
console.log(central_pixels(imag, 1), red_ctr);
// // Multiple blue pixels have the maximum depth of 2:
// let blue_ctr = [16, 17, 18, 26, 27, 28, 38];
// console.log(central_pixels(imag, 2), blue_ctr);

// // All the green pixels have depth 1, so they are all "central":
// let green_ctr = [ 35,45,46,47,56,57,58,59 ];
// console.log(central_pixels(imag, 3).sort(ascending), green_ctr);

// // Similarly, all the purple pixels have depth 1:
// let purple_ctr = [ 2,3,4,5 ];
// console.log(central_pixels(imag, 4).sort(ascending), purple_ctr);

// // There are no pixels with colour 5:
// let non_existent_ctr = [ ];
// console.log(central_pixels(imag, 5), non_existent_ctr);

// // Changing one pixel can make a big difference to the result:
// image.pixels[32] = 3;
// let new_ctr = [ 11,21,41,43 ];
// console.log(central_pixels(imag, 1).sort(ascending), new_ctr);
/* look left
if (img.pixels[i - 1] === undefined || pix[i - 1] === 0) {
    console.log(`- 1[${i - 1}]=u`);
    pix[i] = 1;
}
// look right
if (img.pixels[i + 1] === undefined || pix[i + 1] === 0) {
    console.log(`+ 1[${i + 1}]=u`);
    pix[i] = 1;
}
// look top
if (img.pixels[i - img.width] === undefined || pix[i - img.width] === 0) {
    console.log(`img.pixels[${i} - ${img.width}] ${img.pixels[i - img.width]}`);
    pix[i] = 1;
}
// look down
if (img.pixels[i + img.width] === undefined || pix[i + img.width] === 0) {
    console.log(`img.pixels[${i} + ${img.width}] ${img.pixels[i + img.width]}`);
    pix[i] = 1;*/

/*    старий варіант умов (з 1 )

if (img.pixels[i] === colour) {

    if (
        img.pixels[i - 1] === undefined || //left
        pix[i - 1] === 0 ||
        img.pixels[i + 1] === undefined || //right
        pix[i + 1] === 0 ||
        img.pixels[i + 1] != colour ||
        img.pixels[i - img.width] === undefined || //top
        pix[i - img.width] === 0 ||
        img.pixels[i + img.width] === undefined || //bottom
        img.pixels[i + img.width] != colour ||
        pix[i + img.width] === 0
    ) {
        pix[i] = 1;
    }


} else {
    pix[i] = 0;
}*/
/*
for (let j = 0; j < pix.length; j++) {
    /* дивимся по сторонам, циклом змінємо довжину погляду,
               до pix.length не дійдемо, просте обмеження 
    if (
        pix[i - j] === undefined || //left
        pix[i - j] === 0 ||
        pix[i - j] != colour ||
        pix[i + j] === undefined || //right
        pix[i + j] === 0 ||
        pix[i + j] != colour ||
        pix[i - img.width * j] === undefined || //top
        pix[i - img.width * j] === 0 ||
        pix[i - img.width * j] != colour ||
        pix[i + img.width * j] === undefined || //bottom
        pix[i + img.width * j] === 0 ||
        pix[i + img.width * j] != colour
    ) {
        pix[i] = j;

        if (maxAttention < j) {
            maxAttention = j;
            res = [];
            res.push(i);
            console.log(`!new maxAttention(${maxAttention}) < j${j}  i=${i}`);
            console.log(...res);
        } else if (maxAttention === j) {
            res.push(i);
            console.log(` MaxAtt(${maxAttention}) === j${j}`);
            console.log(...res);
        }

        break;
    }
}*/