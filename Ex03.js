function capToFront(s) {
    return s.match(/[A-Z]/g).join('') + s.match(/[a-z]/g).join('');
  }