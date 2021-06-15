const codeParser = (code) => {
  var strCode = String(code);
  var finalCode;
  const key = strCode.slice(2, 5);
  if(key === '001'){
    finalCode = `20${strCode.slice(0, 2)}년 1학년 ${strCode.slice(
      5,
      7
    )}월\n 학력평가\n ${strCode.slice(7, 9)}번`;

  }else if(key === '002'){
    finalCode = `20${strCode.slice(0, 2)}년 2학년 ${strCode.slice(
      5,
      7
    )}월\n 학력평가\n ${strCode.slice(7, 9)}번`;

  }else if(key === '003'){
    finalCode = `20${strCode.slice(0, 2)}년 3학년 ${strCode.slice(
      5,
      7
    )}월\n 학력평가 ${strCode.slice(7, 9)}번`;
  }else{
    finalCode = "SWA자체문항\n"+strCode.slice(6, 9)+"번";
  }
  return finalCode;
};

export default codeParser
