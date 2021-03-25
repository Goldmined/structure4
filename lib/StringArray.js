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
    return str.replace(/[,.\-—\[\]:]/g, '');
}

















module.exports = {
    getLetters,
    getWords,
    getSentences,
    removeDigits,
    removePunctuation
}