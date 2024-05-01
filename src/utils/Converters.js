
export const textToBinary = (text) => { 
    let bytes = new Map();
    bytes.set("1", "0");
    bytes.set("2", "00");
    bytes.set("3", "000");
    bytes.set("4", "0000");
  
    let keys = Array.from(bytes.keys());
  
    let binaryArray = [];
  
    for (let i = 0; i < text.length; i++) {
      let binaryCode = text.charCodeAt(i).toString(2);
      console.log(binaryCode);
      if (binaryCode.length < 8) {
        let remainingBytes = 8 - binaryCode.length;
        for (let i = 0; i < keys.length; i++) {
          if (remainingBytes == keys[i]) {
            binaryArray.push(bytes.get(keys[i]) + binaryCode);
          }
        }
      } else {
        binaryArray.push(binaryCode);
      }
    }
  
    let convertedBinary = binaryArray.map((text) => String(text)).join(" ");
    return convertedBinary;
  };

  export const binaryToText = (binaryData) => {
    const binaryString = new String(binaryData);
  
    let userBinaryArray = binaryString.split(" ");
  
    let absoluteBinaryArray = [];
  
    userBinaryArray.map((bin) => {
      if (bin.length === 8) {
        //8 bits
        absoluteBinaryArray.push("0b".concat(bin));
      } else if (bin.length < 8 && bin.length > 6) {
        //7 bits
        absoluteBinaryArray.push("0b0".concat(bin));
      } else if (bin.length < 7 && bin.length > 5) {
        //6 bits
        absoluteBinaryArray.push("0b00".concat(bin));
      } else if (bin.length < 6 && bin.length > 4) {
        //5 bits
        absoluteBinaryArray.push("0b000".concat(bin));
      }
    });
  
    let textArray = [];
  
    for (let i = 0; i < absoluteBinaryArray.length; i++) {
      let text = String.fromCharCode(absoluteBinaryArray[i].toString(10));
      textArray.push(text);
    }
    let convertedText = textArray.map((text) => String(text)).join("");
    console.log(convertedText);
    return convertedText;
  };  

  export const textToHex = (text) => { 
    let hexArray = [];
  
    for (let i = 0; i < text.length; i++) {
      let hexCode = text.charCodeAt(i).toString(16);
      hexArray.push(hexCode); 
    }
  
    let convertedHex = hexArray.map((text) => String(text)).join("");
    return convertedHex;
  };

  export const textToASCII = (text) =>{
     let ASCIIArray = []

     for(let i=0; i<text.length; i++){
        let ASCIICode = text.charCodeAt(i)
        ASCIIArray.push(ASCIICode);
     }

     let convertedASCII = ASCIIArray.map(num=>String(num)).join(" ")
     return convertedASCII;
  }

  //decimal to binary
  export const decimalToBinary = (text) =>{
    let bytes = new Map();
    bytes.set("1", "0");
    bytes.set("2", "00");
    bytes.set("3", "000");
    bytes.set("4", "0000");
    bytes.set("5", "00000");
    bytes.set("6", "000000");
    bytes.set("7", "0000000");

    let binaryCode = parseInt(text).toString(2);
    let modifiedBinaryCode = ""
    if(binaryCode.length<2 && binaryCode.length>0){
        modifiedBinaryCode = modifiedBinaryCode.concat(bytes.get("7"), binaryCode)
    }else if(binaryCode.length<3 && binaryCode.length>1){
        modifiedBinaryCode = modifiedBinaryCode.concat(bytes.get("6"), binaryCode)
    }else if(binaryCode.length<4 && binaryCode.length>2){
        modifiedBinaryCode = modifiedBinaryCode.concat(bytes.get("5"), binaryCode)
    }else if(binaryCode.length<5 && binaryCode.length>3){
        modifiedBinaryCode = modifiedBinaryCode.concat(bytes.get("4"), binaryCode)
    }else if(binaryCode.length<6 && binaryCode.length>4){
        modifiedBinaryCode = modifiedBinaryCode.concat(bytes.get("3"), binaryCode)
    }else if(binaryCode.length<7 && binaryCode.length>5){
        modifiedBinaryCode = modifiedBinaryCode.concat(bytes.get("2"), binaryCode)
    }else if(binaryCode.length<8 && binaryCode.length>6){
        modifiedBinaryCode = modifiedBinaryCode.concat(bytes.get("1"), binaryCode)
    }else{
        modifiedBinaryCode = modifiedBinaryCode.concat(binaryCode)
    }

    return modifiedBinaryCode;
  }

  //decimal to Hex

export const decimalToHex = (decimal) =>{
    let hexValue = parseInt(decimal).toString(16)
    return hexValue
}

//hex to decimal
export const hexToDecimal = (value) =>{
  let decimalNumber = parseInt(value, 16)
  return decimalNumber
}

//hex to Binary

export const hexToBinary = (value) =>{
  let decimalNumber = hexToDecimal(value)

  let binary = decimalToBinary(decimalNumber)
  return binary
}

export const ASCIIToBinary = (code) =>{
  //ascii => 0-127
  if(code>127 || code<0){
    alert("Please provide ASCII Code between 0 to 127")
  }
  let binary = decimalToBinary(code)
  return binary
}

export const ASCIIToText = (code) =>{
  if(code>127 || code<0){
    alert("Please provide ASCII Code between 0 to 127")
  }

  let ASCIICharacter = String.fromCharCode(code)
  return ASCIICharacter;
}

export const binaryToHex = (binaryData) =>{
  let binary = binaryToText(binaryData)
  let hexCode = textToHex(binary)
  return hexCode
}

export const binaryToDecimal = (binaryData) =>{
  let decimalNumber = parseInt(binaryData, 2)
  return decimalNumber
}
