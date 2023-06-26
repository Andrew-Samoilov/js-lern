console.log(' -  * CodeWars * Centre of attention * - ');

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

function pixAtt(coord) { // функція для визначення глибини пікселя
    // console.log('coord',coord);
    let pixelDeep = 0;

    // top border
    if (coord - img.width < 0) {
        pixelDeep = 1;
        console.log(coord, `top border`);
        return pixelDeep;
    }
    // right border
    if ((coord + 1) % img.width === 0) {
        pixelDeep = 1;
        console.log(coord, 'right border');
        return pixelDeep;
    }
    //left border
    if ((coord + img.height) % img.height === 1) {
        pixelDeep = 1;
        console.log(coord, 'left border');
        return pixelDeep;
    }
    // bottom border
    if ((coord + img.width) >= pixels.length) {
        pixelDeep = 1;
        console.log(coord, 'bottom border');
        return pixelDeep;
    }


    for (let j = 0; j <= pixels.length; j ++) {
        // console.log(`j`, j);
        /* дивимся по сторонам, циклом змінємо довжину погляду,
        до pixels.length не дійдемо, просте обмеження */
    
        // next color != color
        // if (img.pixels[coord] != colour) {
        //     pixelDeep = 1;
        //     console.log(coord, ' Another color', img.pixels[j], ', pixelDeep ', pixelDeep, 'j=', j);
        //     return pixelDeep;
        // } 

        
        //look top
        console.log(`coord - j * img.width=${coord - j * img.width}`);
        if (img.pixels[coord - j * img.width] === colour) {
            console.log(`j`, j);
            pixelDeep++;
            console.log(`${coord} Same color, j= ${j}, pixelDeep= ${pixelDeep} `);
        }

        //look bottom
        console.log(`coord + j * img.width=${coord + j * img.width}`);
        if (img.pixels[coord + j * img.width] === colour) {
            console.log(`j`, j);
            pixelDeep++;
            console.log(`${coord} Same color, j= ${j}, pixelDeep= ${pixelDeep} `);
        }
      
    }
    return pixelDeep;
}

    // Основний цикл, проходимося по пикселям
    for (let i = 0; i < pixels.length; i++) {
        // console.log(`pixels[${i}] ${pixels[i]}`);

        // cпівпадає з тим, шо шукаємо, робимо
        if (pixels[i] === colour) {
            // console.log(` Main for, coord`,i);
            // console.log(` pixels[${i}] = colour| ${colour}  pixAtt(${i}) ${pixAtt(i)} `);
            if (pixAtt(i) > maxAttention) {      
                result.push(i); //додаємо в результат індекс масива
                // console.log(pixAtt(i));
            }
            
            // maxAttention++;
            // console.log('maxAttention', maxAttention);
        }

    }
    // drawImage(pixels);
    console.log(...result);
    if (!result.length) {
        // console.log(`!!!`);
        return `!! There are no pixels with colour `+colour;   
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
console.log(central_pixels(imag, 1), `1`);


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

/* look left
if (img.pixels[i - 1] === undefined || pixels[i - 1] === 0) {
    console.log(`- 1[${i - 1}]=u`);
    pixels[i] = 1;
}
// look right
if (img.pixels[i + 1] === undefined || pixels[i + 1] === 0) {
    console.log(`+ 1[${i + 1}]=u`);
    pixels[i] = 1;
}
// look top
if (img.pixels[i - img.width] === undefined || pixels[i - img.width] === 0) {
    console.log(`img.pixels[${i} - ${img.width}] ${img.pixels[i - img.width]}`);
    pixels[i] = 1;
}
// look down
if (img.pixels[i + img.width] === undefined || pixels[i + img.width] === 0) {
    console.log(`img.pixels[${i} + ${img.width}] ${img.pixels[i + img.width]}`);
    pixels[i] = 1;*/

/*    старий варіант умов (з 1 )

if (img.pixels[i] === colour) {

    if (
        img.pixels[i - 1] === undefined || //left
        pixels[i - 1] === 0 ||
        img.pixels[i + 1] === undefined || //right
        pixels[i + 1] === 0 ||
        img.pixels[i + 1] != colour ||
        img.pixels[i - img.width] === undefined || //top
        pixels[i - img.width] === 0 ||
        img.pixels[i + img.width] === undefined || //bottom
        img.pixels[i + img.width] != colour ||
        pixels[i + img.width] === 0
    ) {
        pixels[i] = 1;
    }


} else {
    pixels[i] = 0;
}*/
/*
for (let j = 0; j < pixels.length; j++) {
    /* дивимся по сторонам, циклом змінємо довжину погляду,
               до pixels.length не дійдемо, просте обмеження 
    if (
        pixels[i - j] === undefined || //left
        pixels[i - j] === 0 ||
        pixels[i - j] != colour ||
        pixels[i + j] === undefined || //right
        pixels[i + j] === 0 ||
        pixels[i + j] != colour ||
        pixels[i - img.width * j] === undefined || //top
        pixels[i - img.width * j] === 0 ||
        pixels[i - img.width * j] != colour ||
        pixels[i + img.width * j] === undefined || //bottom
        pixels[i + img.width * j] === 0 ||
        pixels[i + img.width * j] != colour
    ) {
        pixels[i] = j;

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

// console.log(` - * Worked test * -`);
// зробив щоб при відсутності кольору писало повідомлення
// imag = picture5;
// console.log(central_pixels(imag, 2), `!!There are no pixels with colour 2`);
    