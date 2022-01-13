function removeDups(arr) {
    var used = [];
    arr.forEach(function(item){
      if (!used.includes(item)){
        used.push(item);
      }
    });
    return used;
  }