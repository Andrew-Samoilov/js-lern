console.log(' -  * test * - ');
// console.log(' -  * CodeWars *  * - ');

const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    rating: 8.38,
};

for (const key in book) {
    // Ключ
    console.log(key, book[key]);
    // Значення властивості з таким ключем

}