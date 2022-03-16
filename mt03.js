function capToFront(sp) {
    let upperRgx = /[A-Z]/g;
    let upperLetters = sp.match(upperRgx);
    for(let i=0; i < upperLetters.length;i++) {
        let indx = sp.indexOf(upperLetters[i]);
      sp = sp.substring(0,indx)+sp.substring(indx+1,sp.length);
    }
    sp = upperLetters.join("")+sp;
    
    return sp;
}

console.log(capToFront("hApPy"))
console.log(capToFront("moveMENT"))
console.log(capToFront("shOrtCAKE"))