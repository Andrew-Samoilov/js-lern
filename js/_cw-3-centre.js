console.log('- * 77CodeWars * 3 kuy * Centre of attention * -');

class Image {
    constructor(data, w, h) {
        this.pixels = data.slice();
        this.width = w;
        this.height = h;
    }
}

function central_pixels(img, colour) {
    const START = Date.now();
    const MAX_SCAN_DISTANCE = Math.max(img.width, img.height);
    let counter = 0;
    let result = [];
    let maxAttention = 0;

    function drawImage(image = Image) {
        console.log(`Function drawImage. W = ${image.width}, H = ${image.height}, colour = ${colour}`);
        let lineOfPixel = [];
        for (let index = 1; index <= image.pixels.length; index++) {
            lineOfPixel.push(image.pixels[index - 1]);
            if (index % image.width === 0) {
                console.log(index / img.width, lineOfPixel);
                lineOfPixel = [];
            }
        }
    }

    drawImage(img);

    function calculatePixelDepth(coordinte) {
        // console.log('coordinte', coordinte);
        counter++;

        // раннє повернення + оптимізований порядок
        if ((coordinte - img.width) < 0) return 1;  // TOP_BORDER
        if (coordinte % img.width === 0) return 1;  // LEFT_BORDER
        if ((coordinte + img.width) >= img.pixels.length) return 1; // BOTTOM_BORDER
        if ((coordinte + 1) % img.width === 0) return 1;    // RIGHT_BORDER

        for (let scanDistance = 1; scanDistance <= MAX_SCAN_DISTANCE; scanDistance++) {
            // console.log(`scanDistance`, scanDistance);
            /* скануємо по сторонам, циклом змінємо довжину сканування */
            counter++;

            //scan top
            if (img.pixels[coordinte - scanDistance * img.width] !== colour)
                return scanDistance;

            //scan left
            if (img.pixels[coordinte - scanDistance] !== colour || scanDistance > coordinte % img.width)
                return scanDistance;

            //scan right
            if (img.pixels[coordinte + scanDistance] !== colour || scanDistance >= (img.width - coordinte % img.width))
                return scanDistance;

            //scan bottom
            if (img.pixels[coordinte + scanDistance * img.width] !== colour)
                return scanDistance;


            // scan diagonals
            if (scanDistance > 1) {
                counter++;
                // console.log(`scanDistance > 1`, scanDistance);

                let leftTopDeltaX = 1;
                let leftTopDeltaY = 1;

                let rightTopDeltaX = -1;
                let rightTopDeltaY = 1;

                let leftBottomDeltaX = 1;
                let leftBottomDeltaY = -1;

                let rightBottomDeltaX = -1;
                let rightBottomDeltaY = -1;

                for (let index = 0; index < scanDistance - 1; index++) {
                    counter++;
                    // console.log(`scan`, scanDistance, `coordinate`, coordinte);

                    //left top
                    // console.log(`left top`, coordinte, `coord`, coordinte - scanDistance + 1 - imag.width * (index + 1));
                    if (img.pixels[coordinte - scanDistance + 1 - img.width * (index + 1)] !== colour) {
                        // console.log(`left top != colour`, coordinte, `scan coord`, coordinte - scanDistance + 1 - imag.width * (index + 1));
                        return scanDistance;
                    }

                    //right top
                    // console.log(`right top`, coordinte, `coord`, coordinte + scanDistance -1- imag.width * (index + 1));
                    if (img.pixels[coordinte + scanDistance - 1 - img.width * (index + 1)] !== colour) {
                        // console.log(`right top != colour`, coordinte, `scan coord`, coordinte + scanDistance - 1 - imag.width * (index + 1));
                        return scanDistance;
                    }

                    //left bottom
                    // console.log(`left bottom`, coordinte, `coord`, coordinte - scanDistance + 1 + imag.width * (index + 1));
                    if (img.pixels[coordinte - scanDistance + 1 + img.width * (index + 1)] !== colour) {
                        // console.log(`left bottom != colour`, coordinte, `scan coord`, coordinte - scanDistance + 1 + imag.width * (index + 1));
                        return scanDistance;
                    }

                    //right bottom
                    // console.log(`right bottom`, coordinte, `coord`, coordinte + scanDistance - 1 + imag.width * (index + 1));
                    if (img.pixels[coordinte + scanDistance - 1 + img.width * (index + 1)] !== colour) {
                        // console.log(`right bottom != colour`, coordinte, `scan coord`, coordinte + scanDistance - 1 + imag.width * (index + 1));
                        return scanDistance;
                    }
                }
            }

        }

    }

    // Main loop, looking all pixels
    for (let index = 0; index < img.pixels.length; index++) {
        counter++;
        // cпівпадає з тим, шо шукаємо, робимо
        if (img.pixels[index] === colour) {
            const CURRENT_PIXEL_DEEP = calculatePixelDepth(index);

            if (CURRENT_PIXEL_DEEP === maxAttention) {
                result.push(index);
            } else if (CURRENT_PIXEL_DEEP > maxAttention) {
                result.length = 0;
                result.push(index);
                maxAttention = CURRENT_PIXEL_DEEP;
            }
        }

    }

    const END = Date.now();
    console.log(counter, END - START);
    return result;
}

let ascending = (a, b) => a - b;
let imag;

let picture = new Image(
    [1, 1, 4, 4, 4, 4, 2, 2, 2, 2, // prettier-ignore
        1, 1, 1, 1, 2, 2, 2, 2, 2, 2,
        1, 1, 1, 1, 2, 2, 2, 2, 2, 2,
        1, 1, 1, 1, 1, 3, 2, 2, 2, 2,
        1, 1, 1, 1, 1, 3, 3, 3, 2, 2,
        1, 1, 1, 1, 1, 1, 3, 3, 3, 3], 10, 6);

let picture2 = new Image(
    [0, 0, 1, 1, 1, 2, 2, 2, 2, 1, // prettier-ignore
        0, 0, 1, 1, 1, 1, 2, 2, 2, 2,
        0, 0, 1, 1, 1, 1, 2, 2, 2, 2,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        0, 0, 0, 1, 1, 2, 2, 2, 2, 2,
        0, 0, 0, 1, 1, 2, 2, 2, 2, 2,
        0, 0, 0, 1, 1, 2, 2, 2, 2, 3], 10, 7);

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

let picture6 = new Image(// prettier-ignore 
    [7, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 5, 6, 6, 5, 7, 7, 7, 7, 5, 5, 5, 7,
        6, 6, 6, 6, 7, 7, 7, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 7, 6, 5, 5, 7, 7, 6, 6, 6, 5,
        6, 6, 6, 6, 7, 7, 7, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 7, 6, 5, 5, 7, 7, 6, 6, 6, 5,
        6, 6, 6, 6, 7, 7, 7, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 7, 6, 5, 5, 7, 7, 6, 6, 6, 5,
        6, 6, 6, 6, 7, 7, 7, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 7, 6, 5, 5, 7, 7, 6, 6, 6, 5,
        7, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 5, 5, 7, 7, 7, 6,
        7, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 5, 5, 7, 7, 7, 6,
        7, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 5, 5, 7, 7, 7, 6,
        7, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 5, 5, 7, 7, 7, 6,
        7, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 5, 5, 7, 7, 7, 6,
        7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 7, 7, 6, 6, 6, 6, 6, 7,
        7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 7, 7, 6, 6, 6, 6, 6, 7,
        7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 7, 7, 6, 6, 6, 6, 6, 7,
        6, 5, 5, 5, 7, 7, 7, 5, 5, 5, 5, 5, 6, 5, 5, 5, 5, 5, 7, 7, 5, 7, 7, 7, 7, 7, 7, 7, 6,
        6, 5, 5, 5, 7, 7, 7, 5, 5, 5, 5, 5, 6, 5, 5, 5, 5, 5, 7, 7, 5, 7, 7, 7, 7, 7, 7, 7, 6,
        6, 5, 5, 5, 7, 7, 7, 5, 5, 5, 5, 5, 6, 5, 5, 5, 5, 5, 7, 7, 5, 7, 7, 7, 7, 7, 7, 7, 6,
        5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 7, 7, 7, 7, 7, 5, 5, 5, 7, 7, 7, 7, 7, 7, 7, 7,
        5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 7, 7, 7, 5, 5, 7, 7, 7, 7, 7, 7,
        5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 7, 7, 7, 5, 5, 7, 7, 7, 7, 7, 7,
        5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 7, 7, 7, 5, 5, 7, 7, 7, 7, 7, 7,
        5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 7, 7, 7, 5, 5, 7, 7, 7, 7, 7, 7,
        7, 7, 7, 7, 5, 5, 5, 6, 6, 6, 6, 6, 5, 6, 6, 6, 6, 6, 7, 7, 5, 6, 6, 7, 7, 5, 5, 5, 7,
        7, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 5, 6, 6, 6, 6, 6, 5, 5, 5, 6, 6, 7, 7, 6, 6, 6, 7,
        7, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 5, 6, 6, 6, 6, 6, 5, 5, 5, 6, 6, 7, 7, 6, 6, 6, 7,
        5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 5,
        5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 5,
        5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 5,
        6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 5, 6, 5, 5, 7, 7, 7, 7, 7, 6,
        6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 5, 6, 5, 5, 7, 7, 7, 7, 7, 6], 29, 29);


let picture7 = new Image([
    5, 5, 5, 6, 7, 7, 7, 7, 6, 6, 6, 6, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 5,
    6, 6, 6, 7, 6, 6, 5, 5, 7, 7, 7, 6, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 7, 7, 7, 5,
    6, 6, 6, 7, 6, 6, 5, 5, 7, 7, 7, 6, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 7, 7, 7, 5,
    6, 6, 6, 7, 6, 6, 5, 5, 7, 7, 7, 6, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 7, 7, 7, 5,
    6, 6, 6, 5, 7, 7, 6, 6, 6, 6, 6, 6, 7, 7, 7, 5, 7, 7, 7, 7, 7, 6, 6, 6, 6, 7, 7, 7, 6,
    5, 5, 5, 7, 6, 6, 5, 5, 5, 5, 5, 7, 7, 7, 7, 6, 7, 7, 6, 6, 6, 7, 7, 6, 6, 6, 6, 6, 7,
    5, 5, 5, 7, 6, 6, 5, 5, 5, 5, 5, 7, 7, 7, 7, 6, 7, 7, 6, 6, 6, 7, 7, 6, 6, 6, 6, 6, 7,
    5, 5, 5, 7, 6, 6, 5, 5, 5, 5, 5, 7, 7, 7, 7, 6, 7, 7, 6, 6, 6, 7, 7, 6, 6, 6, 6, 6, 7,
    6, 6, 6, 7, 7, 7, 6, 6, 5, 5, 5, 5, 6, 6, 6, 7, 7, 7, 6, 6, 6, 5, 5, 7, 7, 5, 5, 5, 5,
    6, 6, 6, 7, 7, 7, 6, 6, 5, 5, 5, 5, 6, 6, 6, 7, 7, 7, 6, 6, 6, 5, 5, 7, 7, 5, 5, 5, 5,
    6, 6, 6, 7, 7, 7, 6, 6, 5, 5, 5, 5, 6, 6, 6, 7, 7, 7, 6, 6, 6, 5, 5, 7, 7, 5, 5, 5, 5,
    6, 6, 6, 7, 7, 7, 6, 6, 5, 5, 5, 5, 6, 6, 6, 7, 7, 7, 6, 6, 6, 5, 5, 7, 7, 5, 5, 5, 5,
    6, 6, 6, 7, 7, 7, 6, 6, 5, 5, 5, 5, 6, 6, 6, 7, 7, 7, 6, 6, 6, 5, 5, 7, 7, 5, 5, 5, 5,
    6, 6, 6, 7, 7, 7, 6, 6, 5, 5, 5, 5, 6, 6, 6, 7, 7, 7, 6, 6, 6, 5, 5, 7, 7, 5, 5, 5, 5,
    6, 6, 6, 7, 7, 7, 6, 6, 5, 5, 5, 5, 6, 6, 6, 7, 7, 7, 6, 6, 6, 5, 5, 7, 7, 5, 5, 5, 5,
    7, 7, 7, 7, 5, 5, 5, 5, 5, 5, 5, 7, 5, 5, 5, 5, 6, 6, 5, 5, 5, 7, 7, 7, 7, 6, 6, 6, 5,
    6, 6, 6, 6, 5, 5, 6, 6, 7, 7, 7, 5, 7, 7, 7, 5, 6, 6, 6, 6, 6, 6, 6, 5, 5, 7, 7, 7, 5,
    6, 6, 6, 6, 5, 5, 6, 6, 7, 7, 7, 5, 7, 7, 7, 5, 6, 6, 6, 6, 6, 6, 6, 5, 5, 7, 7, 7, 5,
    5, 5, 5, 7, 6, 6, 7, 7, 7, 7, 7, 6, 7, 7, 7, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5,
    5, 5, 5, 7, 6, 6, 7, 7, 7, 7, 7, 6, 7, 7, 7, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5,
    5, 5, 5, 7, 6, 6, 7, 7, 7, 7, 7, 6, 7, 7, 7, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5,
    7, 7, 7, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 5, 7, 7, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 7,
    7, 7, 7, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 5, 7, 7, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 7,
    5, 5, 5, 5, 6, 6, 7, 7, 6, 6, 6, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 6, 6, 7, 7, 6, 6, 6, 7,
    5, 5, 5, 5, 6, 6, 7, 7, 6, 6, 6, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7, 6, 6, 7, 7, 6, 6, 6, 7,
    7, 7, 7, 6, 7, 7, 5, 5, 7, 7, 7, 5, 5, 5, 5, 7, 6, 6, 7, 7, 7, 6, 6, 5, 5, 6, 6, 6, 7,
    7, 7, 7, 6, 7, 7, 5, 5, 7, 7, 7, 5, 5, 5, 5, 7, 6, 6, 7, 7, 7, 6, 6, 5, 5, 6, 6, 6, 7,
    5, 5, 5, 6, 5, 5, 6, 6, 7, 7, 7, 5, 7, 7, 7, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6,
    5, 5, 5, 6, 5, 5, 6, 6, 7, 7, 7, 5, 7, 7, 7, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6
], 29, 29);

// imag = picture4;
// console.log(central_pixels(imag, 5), `-`);

imag = picture2;
console.log(central_pixels(imag, 1), `!&?`);

// Only one red pixel has the maximum depth of 3:
// imag = picture;
// let red_ctr = [32];
// console.log(central_pixels(imag, 1), red_ctr);

// imag = picture7;
// console.log(central_pixels(imag, 5), [175, 181, 182, 183, 211, 212,
//     241, 242, 270, 271, 287, 288, 299, 300, 316, 317, 328, 329, 345, 346,
//     357, 358, 374, 375, 386, 387, 403, 404, 415, 416, 552, 708, 709, 710, 737, 738])

// imag = picture6;
// console.log(central_pixels(imag, 5), [218, 219, 220, 221, 555, 584]);

// // Multiple blue pixels have the maximum depth of 2:
// imag = picture;
// let blue_ctr = [16, 17, 18, 26, 27, 28, 38];
// console.log(central_pixels(imag, 2), blue_ctr);

// // All the green pixels have depth 1, so they are all "central":
// let green_ctr = [35, 45, 46, 47, 56, 57, 58, 59];
// console.log(central_pixels(imag, 3).sort(ascending), green_ctr);

// // Similarly, all the purple pixels have depth 1:
// let purple_ctr = [ 2,3,4,5 ];
// console.log(central_pixels(imag, 4).sort(ascending), purple_ctr);

// // There are no pixels with colour 5:
// let non_existent_ctr = [ ];
// console.log(central_pixels(imag, 5), non_existent_ctr);

// // Changing one pixel can make a big difference to the result:
// imag = picture;
// imag.pixels[32] = 3;
// let new_ctr = [11, 21, 41, 43];
// console.log(central_pixels(imag, 1).sort(ascending), new_ctr);

// console.log(` - * Worked test * -`);
// if no color, we return an empty array
// imag = picture5;
// console.log(central_pixels(imag, 2), `!!There are no pixels with colour 2`);