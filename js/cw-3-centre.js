console.log(' -  * CodeWars * Centre of attention * - ');

function central_pixels(img, colour) {
    function drawImage(img) {
        console.log(`function drawImage. W=${img.width}, H=${img.height}, colour = ${colour}.`);
        let tmpRes = [];
        for (let i = 1; i <= img.pixels.length; i++) {
            tmpRes.push(img.pixels[i - 1]);
            // console.log(`i% image.width ${i% image.width}` );
            if (i % img.width === 0) {
                console.log(tmpRes);
                tmpRes = [];
            }
        }
    }

    let cacheImg = img;
    drawImage(img);

    for (let i = 0; i < img.pixels.length; i++) {
        // console.log(`img.pixels[${i}] ${img.pixels[i]}`);

        // cпівпадає з тим, шо шукаємо, робимо
        if (img.pixels[i] === colour) {

            /* дивимся по сторонам, циrлом змінємо довжину погляду, 
            до img.pixels.length не дійдемо, просте обмеження */
            for (let j = 1; j < img.pixels.length; j++) {


                if (
                    img.pixels[i - j] === undefined || //left
                    cacheImg.pixels[i - j] === 0 ||
                    img.pixels[i + j] === undefined || //right
                    cacheImg.pixels[i + j] === 0 ||
                    img.pixels[i + j] != colour ||
                    img.pixels[i - img.width * j] === undefined || //top
                    cacheImg.pixels[i - img.width * j] === 0 ||
                    img.pixels[i + img.width * j] === undefined || //bottom
                    img.pixels[i + img.width * j] != colour ||
                    cacheImg.pixels[i + img.width * j] === 0
                ) {
                    cacheImg.pixels[i] = j;
                    break;
                }
            }

        } else {
            cacheImg.pixels[i] = 0;
        }


    }
    drawImage(cacheImg);
    return cacheImg;
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

// Only one red pixel has the maximum depth of 3:
imag = picture2;
let red_ctr = [32];
console.log(central_pixels(imag, 1), red_ctr);

// // Multiple blue pixels have the maximum depth of 2:
// let blue_ctr = [ 16,17,18,26,27,28,38 ];
// console.log(central_pixels(imag, 2).sort(ascending), blue_ctr);

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
if (img.pixels[i - 1] === undefined || cacheImg.pixels[i - 1] === 0) {
    console.log(`- 1[${i - 1}]=u`);
    cacheImg.pixels[i] = 1;
}
// look right
if (img.pixels[i + 1] === undefined || cacheImg.pixels[i + 1] === 0) {
    console.log(`+ 1[${i + 1}]=u`);
    cacheImg.pixels[i] = 1;
}
// look top
if (img.pixels[i - img.width] === undefined || cacheImg.pixels[i - img.width] === 0) {
    console.log(`img.pixels[${i} - ${img.width}] ${img.pixels[i - img.width]}`);
    cacheImg.pixels[i] = 1;
}
// look down
if (img.pixels[i + img.width] === undefined || cacheImg.pixels[i + img.width] === 0) {
    console.log(`img.pixels[${i} + ${img.width}] ${img.pixels[i + img.width]}`);
    cacheImg.pixels[i] = 1;*/

/*    старий варіант умов (з 1 )

if (img.pixels[i] === colour) {

    if (
        img.pixels[i - 1] === undefined || //left
        cacheImg.pixels[i - 1] === 0 ||
        img.pixels[i + 1] === undefined || //right
        cacheImg.pixels[i + 1] === 0 ||
        img.pixels[i + 1] != colour ||
        img.pixels[i - img.width] === undefined || //top
        cacheImg.pixels[i - img.width] === 0 ||
        img.pixels[i + img.width] === undefined || //bottom
        img.pixels[i + img.width] != colour ||
        cacheImg.pixels[i + img.width] === 0
    ) {
        cacheImg.pixels[i] = 1;
    }


} else {
    cacheImg.pixels[i] = 0;
}*/