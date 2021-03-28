const getLetters = (str) => {
     return str.split('');
}

const getWords = (str) => {
    return str.split(' ');
}

const getSentences =(str) => {
    return str.split('. ');
}

const removeDigits = (str) => {
    return str.replace(/[0-9]/g, '');
}

const removePunctuation =(str) =>{
    return str.replace(/[,.\[\]:]/g, '');
}
const getDictionary = (str) => {
     const cleanText = removeDigits(removePunctuation(str).toLowerCase());
     const words = getWords(cleanText).filter((word)=>{
         if (word === "") return false;
         if (word === "-") return false;
         if (word ==='—') return false;
         return true;
     })
     const dictionary = {};
     for (let word of words) {
         if (!dictionary[word]){
             dictionary[word] = 0;
         }
         dictionary[word] +=1;
     }
     return dictionary;
}

const getFrequent = (str) => {
    let max = 0;
    let maxWord ='';
    const dictionary = getDictionary(str);
    for (let word in dictionary) {
        if (dictionary[word] > max){
            max = dictionary[word];
            maxWord = word;
        }
    }
    return {word: maxWord, count: max};
    // return {[maxWord]:max}
}

const sortByFrequent =(str) =>{
    const dictionary = getDictionary(str);
    const arrWords  = []
    for (let word in dictionary) {
        arrWords.push({
            word:word,
            count: dictionary[word]
        })
    }
    return arrWords.sort((word1, word2)=>{
        return word2.count - word1.count;
    });
}
















module.exports = {
    getLetters,
    getWords,
    getSentences,
    removeDigits,
    removePunctuation,
    getDictionary,
    getFrequent,
    sortByFrequent
}