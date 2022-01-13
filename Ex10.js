function isValidIP(str) {
    if(/\s/g.test(str) === true) {
      return false;
    } else if(str.split('.').filter(x => x === Number(x).toString()).length !== 4) {
      return false;
    } else {
      return str.split('.').every(x => Number(x) <= 255 && Number(x) >= 0);
    }
  }