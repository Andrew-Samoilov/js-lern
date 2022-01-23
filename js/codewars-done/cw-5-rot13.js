function rot13(message) {
  console.log(message);
  const alphab = `AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz`;
  console.log(`Alph len ${alphab.length}`);
  let res = [];

  for (let i = 0; i < message.length; i++) {
    let inAlphabet = alphab.indexOf(message[i]);
    if (inAlphabet === -1) {
      res.push(message[i]);
    } else {
      inAlphabet += 26;
      if (inAlphabet > 52) inAlphabet -= 52;
      // console.log(inAlphabet, alphab[inAlphabet]);
      res.push(alphab[inAlphabet]);
    }
  }
  return res.join('');
}

console.log(rot13("test"), "grfg");
console.log(rot13("Test"), "Grfg");