
function  numbersplit(num){
    if(num%2==0){

return[num/2,num/2]
    }
else {
  return[Math.floor(num/2),Math.floor(num/2)+1]  
}

}
consloe.log(numbersplit(4));
consloe.log(numbersplit(10));
consloe.log(numbersplit(11));
consloe.log(numbersplit(-9));
