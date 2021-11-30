console.log(" - * Code wars * - ");
console.log();
console.log();

function DNAStrand(dna){
  //your code here
  const args = Array.from(arguments[0]);
  console.log('-', args);
}



// console.log(DNAStrand([]));
console.log(DNAStrand(['ATGC']));
console.log(DNAStrand(['GTAT']));
console.log(DNAStrand(['AAAA']));
