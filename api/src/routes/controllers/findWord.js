const findWord = (word, searchWord) => {

  word = word.replace(/\s+/g, '')
  searchWord = searchWord.replace(/\s+/g, '')

  for (let i = 0; i < word.length; i++) {
    const sliced = word.slice(i, searchWord.length + i);
    if (sliced.toLowerCase() === searchWord.toLowerCase()) return true;
  }

  return false;
};

module.exports = findWord