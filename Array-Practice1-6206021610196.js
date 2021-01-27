let values1 = ['Apple',1,false];
let values2=['fries',2,true];
let values3=['mars',9,'Apple'];
function push(values1,values2,values3) {
  var buf1 = Buffer.from( typeof values1[0]);
  var buf2 = Buffer.from( typeof values1[1]);
  var buf3 = Buffer.from( typeof values1[2]);
  var buf4 = Buffer.from( typeof values2[0]);
  var buf5 = Buffer.from( typeof values2[1]);
  var buf6 = Buffer.from( typeof values2[2]);
  var buf7 = Buffer.from( typeof values3[0]);
  var buf8 = Buffer.from( typeof values3[1]);
  var buf9 = Buffer.from( typeof values3[2]);
  return(buf1.equals(buf4)+" "+(buf2.equals(buf5))+" "
  +(buf3.equals(buf6))+"\n"+ (buf4.equals(buf7))+" "+
  (buf5.equals(buf8))+" "+(buf6.equals(buf9))+"\n"+
  (buf7.equals(buf1))+" "+(buf8.equals(buf2))+" "+(
    buf9.equals(buf3)));
}console.log( push(values1,values2,values3));

 
 
 
 
 

 

