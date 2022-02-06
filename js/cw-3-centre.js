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

    let cashImg = img;
    drawImage(img);

    for (let i = 0; i < img.pixels.length; i++) {
        // console.log(`img.pixels[${i}] ${img.pixels[i]}`);

        // cпівпадає з тим, шо шукаємо, робимо
        if (img.pixels[i] === colour) {
            if (
                img.pixels[i - 1] === undefined || //left
                cashImg.pixels[i - 1] === 0 || 
                img.pixels[i + 1] === undefined || //right
                cashImg.pixels[i + 1] === 0 ||
                img.pixels[i + 1] !=colour ||
                img.pixels[i - img.width] === undefined || //top
                cashImg.pixels[i - img.width] === 0 ||
                img.pixels[i + img.width] === undefined || //bottom
                img.pixels[i + img.width] != colour ||
                cashImg.pixels[i + img.width] === 0
            ) {
                cashImg.pixels[i] = 1;
            }
        } else {
            cashImg.pixels[i] = 0;
        }
    }
    drawImage(cashImg);
    return cashImg;
}

class Image {
    constructor(data, w, h) {
        this.pixels = data.slice();
        this.width = w;
        this.height = h;
    }
}

let ascending = (a, b) => a - b;
// prettier-ignore
let picture = new Image( 
   [1,1,4,4,4,4,2,2,2,2,
    1,1,1,1,2,2,2,2,2,2,
    1,1,1,1,2,2,2,2,2,2,
    1,1,1,1,1,3,2,2,2,2,
    1,1,1,1,1,3,3,3,2,2,
    1,1,1,1,1,1,3,3,3,3], 10, 6 );
let imag;

// Only one red pixel has the maximum depth of 3:
imag = picture;
let red_ctr = [32];
console.log(central_pixels(imag, 2), red_ctr);

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
if (img.pixels[i - 1] === undefined || cashImg.pixels[i - 1] === 0) {
    console.log(`- 1[${i - 1}]=u`);
    cashImg.pixels[i] = 1;
}
// look right
if (img.pixels[i + 1] === undefined || cashImg.pixels[i + 1] === 0) {
    console.log(`+ 1[${i + 1}]=u`);
    cashImg.pixels[i] = 1;
}
// look top
if (img.pixels[i - img.width] === undefined || cashImg.pixels[i - img.width] === 0) {
    console.log(`img.pixels[${i} - ${img.width}] ${img.pixels[i - img.width]}`);
    cashImg.pixels[i] = 1;
}
// look down
if (img.pixels[i + img.width] === undefined || cashImg.pixels[i + img.width] === 0) {
    console.log(`img.pixels[${i} + ${img.width}] ${img.pixels[i + img.width]}`);
    cashImg.pixels[i] = 1;*/
