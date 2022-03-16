var accounts = [
    { name: 'John', msgCount: 2300 },
    { name: 'Steve', msgCount: 4000 },
    { name: 'Martin', msgCount: 2700 }
    
 ];
 
  
  var msgTotal = accounts.reduce(function(prev, cur) {
    return prev + cur.msgCount;
  }, 0);
  
  console.log('Total Messages:', msgTotal); 