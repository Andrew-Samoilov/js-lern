console.log(' -  * CodeWars *** 3 kuy * Centre of attention * - ');

function central_pixels(img, colour) {
    let result = [];
    let maxAttention = 0;
    let pixels = img.pixels;

    function drawImage(image = Image) {
        console.log(`function drawImage. W=${image.width}, H=${image.height}, colour = ${colour}.`);
        let tmpRes = [];
        let numberOfHeightLine = 1;
        for (let i = 1; i <= image.pixels.length; i++) {
            tmpRes.push(image.pixels[i - 1]);
            // console.log(`i% i.width ${i% i.width}` );
            if (i % image.width === 0) {
                console.log(`${numberOfHeightLine++}`, tmpRes);
                tmpRes = [];
            }
        }
    }

    drawImage(img);

    function calculatePixelDepth(coordinte) {
        // console.log('coordinte', coordinte);
        let pixelDepth = 0;
        const TOP_BORDER = (coordinte - img.width) < 0;
        const RIGHT_BORDER = (coordinte + 1) % img.width === 0;
        const LEFT_BORDER = (coordinte + img.width) % img.width === 0;
        const BOTTOM_BORDER = (coordinte + img.width) >= pixels.length;

        if (TOP_BORDER) {
            pixelDepth = 1;
            console.log(coordinte, `top border`);
            return pixelDepth;
        }

        if (RIGHT_BORDER) {
            pixelDepth = 1;
            console.log(coordinte, 'right border');
            return pixelDepth;
        }

        if (LEFT_BORDER) {
            pixelDepth = 1;
            console.log(coordinte, 'left border');
            return pixelDepth;
        }

        if (BOTTOM_BORDER) {
            pixelDepth = 1;
            console.log(coordinte, 'bottom border');
            return pixelDepth;
        }

        let lookTop = 0;
        let lookBottom = 0;
        for (let step = 1; step <= pixels.length; step++) {

            // console.log(`step`, step);
            /* дивимся по сторонам, циклом змінємо довжину погляду,
            до pixels.length не дійдемо, просте обмеження */

            //look top
            if (img.pixels[coordinte - step * img.width] === colour) {
                lookTop = step;
                // console.log(coordinte,`Look top. Same color, step= ${step}, pixelDepth= ${pixelDepth}`);
            } 
            //look bottom
            // console.log(`coordinte + step * img.width=${coordinte + step * img.width}`);
            if (img.pixels[coordinte + step * img.width] === colour) {
                lookBottom = step;
                // console.log(coordinte ,`Look bottom. Same color, step= ${step}, pixelDepth= ${pixelDepth} `);
            }

            if (lookTop < step && lookTop < lookBottom) {
                console.log(coordinte, `lookTop < step`, lookTop, step, `lookBottom`, lookBottom);
                pixelDepth = lookTop;
                break
            }
            // console.log(`step`,step,`lookTop`, lookTop, `lookBottom`, lookBottom);
        }

        return pixelDepth;
    }

    // Main loop, looking all pixels
    for (let i = 0; i < pixels.length; i++) {
        // console.log(`pixels[${i}] ${pixels[i]}`);

        // cпівпадає з тим, шо шукаємо, робимо
        if (pixels[i] === colour) {
            let currentPixelDeep = calculatePixelDepth(i);
            
            if (currentPixelDeep > maxAttention) {
                // console.log(` pixels[${i}]= ${colour} currentPixelDeep ${currentPixelDeep}, maxAttention = ${maxAttention}`);
                result.length = 0;
                result.push(i); //додаємо в результат індекс масива
                console.log('currentPixelDeep > maxAttention)', currentPixelDeep, maxAttention);
                maxAttention = currentPixelDeep;
            } else if (currentPixelDeep === maxAttention) {
                console.log('currentPixelDeep === maxAttention)', currentPixelDeep, maxAttention);
                result.push(i); //додаємо в результат індекс масива
            }

            // maxAttention++;
            // console.log('maxAttention', maxAttention);
        }

    }

    if (!result.length) {
        return `!! There are no pixels with colour ` + colour;
    }
    // return Math.max(...result);
    return result;
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

let picture5 = new Image(// prettier-ignore
    [8, 8,
        7, 8], 2, 2);

imag = picture;
console.log(central_pixels(imag, 1), `-`);


// imag = picture2;
// console.log(central_pixels(imag, 1), `!&?`);

// Only one red pixel has the maximum depth of 3:
// let red_ctr = [32];
// console.log(central_pixels(red_ctr, 1), red_ctr);

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

// console.log(` - * Worked test * -`);
// зробив щоб при відсутності кольору писало повідомлення
// imag = picture5;
// console.log(central_pixels(imag, 2), `!!There are no pixels with colour 2`);
