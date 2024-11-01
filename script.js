function processText(isEncrypting) {
    const inputText = document.getElementById("inputText").value;
    const shift = parseInt(document.getElementById("shift").value);
    const outputText = document.getElementById("outputText");

    if (!inputText || isNaN(shift)) {
      alert("Խնդրում ենք մուտքագրել ճիշտ տեքստ և տառաշարժի մակարդակ:");
      return;
    }

    const armenianAlphabet = "ԱԲԳԴԵԶԷԸԹԺԻԼԽԾԿՀՁՂՃՄՅՆՇՈՉՊՋՌՍՎՏՐՑՈՒՓՔՕՖ";
    const armenianAlphabetLower = armenianAlphabet.toLowerCase();
    const englishAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const englishAlphabetLower = englishAlphabet.toLowerCase();

    let result = "";

    for (let i = 0; i < inputText.length; i++) {
      const char = inputText[i];
      const actualShift = isEncrypting ? shift : -shift;

      if (armenianAlphabet.includes(char)) {
        const index = (armenianAlphabet.indexOf(char) + actualShift + armenianAlphabet.length) % armenianAlphabet.length;
        result += armenianAlphabet[index];
      }
      else if (armenianAlphabetLower.includes(char)) {
        const index = (armenianAlphabetLower.indexOf(char) + actualShift + armenianAlphabetLower.length) % armenianAlphabetLower.length;
        result += armenianAlphabetLower[index];
      }
      else if (englishAlphabet.includes(char)) {
        const index = (englishAlphabet.indexOf(char) + actualShift + englishAlphabet.length) % englishAlphabet.length;
        result += englishAlphabet[index];
      }
      else if (englishAlphabetLower.includes(char)) {
        const index = (englishAlphabetLower.indexOf(char) + actualShift + englishAlphabetLower.length) % englishAlphabetLower.length;
        result += englishAlphabetLower[index];
      }
      else {
        result += char;
      }
    }

    outputText.value = result;
}