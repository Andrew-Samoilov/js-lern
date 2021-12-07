console.log(" - * Code wars * - ");
console.log();
console.log();

function DNAStrand(dna) {
 
  //your code here
  if (!dna[0]) { return []; }

  const args = Array.from(arguments);
  // console.log('-', args);
  const result = args[0].split("")||[];
  // console.log('- split', result);

  for (let i = 0; i < result.length; i++) {
    // console.log(`- result[${i}] ${result[i]}`);
    switch (result[i]) {
      case 'A': result[i] = 'T'; break;
      case 'C': result[i] = 'G'; break;
      case 'T': result[i] = 'A'; break;
      case 'G': result[i] = 'C'; break;    
      
      default: result[i] = 'Z'; break;
    }
  }
//  console.log('- after', result.join(''));

  return result.join('');
}



console.log(DNAStrand([]));
console.log(DNAStrand('AAA'));
console.log(DNAStrand('ATGC'));
console.log(DNAStrand('GTATa'));

