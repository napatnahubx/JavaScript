const checkValidIpv4 = (entry) => {
    const mainPipeline = [
      block => !isNaN(parseInt(block, 10)),
      block => parseInt(block,10) >= 0,
      block => parseInt(block,10) <= 255,
      block => String(block).length === 1
        || String(block).length > 1
        && String(block)[0] !== '0',
    ];
  
    const blocks = entry.split(".");
    if(blocks.length === 4
      && !blocks.every(block => parseInt(block, 10) === 0)) {
      return blocks.every(block =>
        mainPipeline.every(ckeck => ckeck(block) )
      );
    }
  
    return false;
  }
  
  console.log(checkValidIpv4('0.0.0.0')); //false
  console.log(checkValidIpv4('0.0.0.1')); //true
  console.log(checkValidIpv4('0.01.001.0')); //false
  console.log(checkValidIpv4('8.0.8.0')); //true