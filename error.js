function criticalCode() {
    throw "throwimg an exception";

}
function logError(theException) {
    console.log(theException);
}
console.log("\n-********try catch****\n");
try{
    criticalCode();

}catch(ex){
    console.log("got an error");
    logError(ex);
}
console.log("\n********throewing in try*****\n")
try{
    throw"An excetion that is thorwn ";
}catch(ex){
    console.log("got an error");
    logError(ex);
}
console.log("\n********throewing in try*****\n")
try{
    criticalCode();
}catch (ex){
    console.log("got an error");
    logError(ex);
}finally{
    console.log("code that always will run");
}
function hello() {
    console.log("\n*****Throwing Exception*******\n");
}