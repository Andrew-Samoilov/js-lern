console.log(' -  * CodeWars *** 3 kuy * Centre of attention * - ');

class Image {
    constructor(data, w, h) {
        this.pixels = data.slice();
        this.width = w;
        this.height = h;
    }
}

function central_pixels(img, colour) {
    let result = [];
    let maxAttention = 0;

    function drawImage(image = Image) {
        console.log(`function drawImage. W = ${image.width}, H = ${image.height}, colour = ${colour}.`);
        let lineOfPixel = [];
        for (let index = 1; index <= image.pixels.length; index++) {
            lineOfPixel.push(image.pixels[index - 1]);
            // console.log(`index% index.width ${index% index.width}` );
            if (index % image.width === 0) {
                console.log(index / img.width, lineOfPixel);
                lineOfPixel = [];
            }
        }
    }

    drawImage(img);

    function calculatePixelDepth(coordinte) {
        // console.log('coordinte', coordinte);
        let pixelDepth = 1;
        const TOP_BORDER = (coordinte - img.width) < 0;
        const RIGHT_BORDER = (coordinte + 1) % img.width === 0;
        const LEFT_BORDER = (coordinte + img.width) % img.width === 0;
        const BOTTOM_BORDER = (coordinte + img.width) >= img.pixels.length;

        if (TOP_BORDER) {
            pixelDepth = 1;
            // console.log(coordinte, `top border`);
            return pixelDepth;
        }

        if (RIGHT_BORDER) {
            pixelDepth = 1;
            // console.log(coordinte, 'right border');
            // return pixelDepth;
        }

        if (LEFT_BORDER) {
            pixelDepth = 1;
            // console.log(coordinte, 'left border');
            return pixelDepth;
        }

        if (BOTTOM_BORDER) {
            pixelDepth = 1;
            // console.log(coordinte, 'bottom border');
            return pixelDepth;
        }

        let scanTop = 1;
        let scanBottom = 1;
        let scanLeft = 1;
        let scanRight = 1;
        const MAX_SCAN_DISTANCE = Math.max(img.width, img.height);

        for (let scanDistance = 1; scanDistance <= MAX_SCAN_DISTANCE + 1; scanDistance++) {

            // console.log(`scanDistance`, scanDistance);
            /* скануємо по сторонам, циклом змінємо довжину сканування */

            //scan top
            if (img.pixels[coordinte - scanDistance * img.width] === colour) {
                scanTop = scanDistance + 1;
                // console.log(coordinte,`scan top. Same color, scanDistance= ${scanDistance}, pixelDepth= ${pixelDepth}`);
            }
            //scan bottom
            if (img.pixels[coordinte + scanDistance * img.width] === colour) {
                scanBottom = scanDistance + 1;
                // console.log(coordinte ,`scan bottom. Same color, scanDistance= ${scanDistance}, pixelDepth= ${pixelDepth} `);
            }
            //scan left
            if (img.pixels[coordinte - scanDistance] === colour && scanDistance <= (coordinte%img.width)) {
                scanLeft = scanDistance + 1;
                // console.log(coordinte, `Scan left. scanDistance= ${scanDistance}, pixelDepth = ${pixelDepth}`);
            }
            //!!!!scan right не ловить дірки. треба все переводити на флаги - scanRight=true
            if (img.pixels[coordinte + scanDistance] === colour && scanDistance < (img.width-(coordinte % img.width))) {
                scanRight = scanDistance + 1;
                console.log(coordinte, `scan right. scanDistance= ${scanDistance}, pixelDepth= ${pixelDepth}`);
            }

        }

        console.log(`!!`, coordinte, scanTop, scanBottom, scanLeft, scanRight, 'MaxDeep', Math.min(scanTop, scanBottom, scanLeft, scanRight));
        return Math.min(scanTop, scanBottom, scanLeft, scanRight);;
    }

    // Main loop, looking all pixels
    for (let index = 0; index < img.pixels.length; index++) {
        // console.log(`img.pixels[${index}] ${img.pixels[index]}`);

        // cпівпадає з тим, шо шукаємо, робимо
        if (img.pixels[index] === colour) {
            const CURRENT_PIXEL_DEEP = calculatePixelDepth(index);

            if (CURRENT_PIXEL_DEEP > maxAttention) {
                // console.log(`CURRENT_PIXEL_DEEP > maxAttention) img.pixels[${index}]= ${colour} CURRENT_PIXEL_DEEP ${CURRENT_PIXEL_DEEP}, maxAttention = ${maxAttention}`);
                result.length = 0;
                result.push(index); //додаємо в результат індекс масива
                // console.log('CURRENT_PIXEL_DEEP > maxAttention)', CURRENT_PIXEL_DEEP, maxAttention);
                maxAttention = CURRENT_PIXEL_DEEP;
            } else if (CURRENT_PIXEL_DEEP === maxAttention) {
                // console.log('CURRENT_PIXEL_DEEP = maxAttention', CURRENT_PIXEL_DEEP, maxAttention);
                result.push(index); //додаємо в результат індекс масива
            }
        }

    }
    // There are no pixels with colour
    if (!result.length) {
        return [];
    }
    // console.log(result);
    return result;
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

// imag = picture;
// console.log(central_pixels(imag, 1), `-`);


// imag = picture2;
// console.log(central_pixels(imag, 1), `!&?`);

// Only one red pixel has the maximum depth of 3:
imag = picture;
let red_ctr = [32];
// console.log(central_pixels(imag, 1), red_ctr);

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
imag.pixels[32] = 3;
let new_ctr = [ 11,21,41,43 ];
console.log(central_pixels(imag, 1).sort(ascending), new_ctr);

// console.log(` - * Worked test * -`);
// зробив щоб при відсутності кольору писало повідомлення
// imag = picture5;
// console.log(central_pixels(imag, 2), `!!There are no pixels with colour 2`);
