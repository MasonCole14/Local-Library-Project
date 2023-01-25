function getTotalBooksCount(books) {
  let allBooks = 0;
    books.forEach((book) => {
      allBooks++
    })
  return allBooks;
}

function getTotalAccountsCount(accounts) {
  let allAccounts = 0;
  accounts.forEach((account) => {
    allAccounts++
  })
return allAccounts;
}

function getBooksBorrowedCount(books) {
  return books.filter((book) => book.borrows[0].returned === false).length
}

function getMostCommonGenres(books) {
  const mostComGen = books.reduce((mostComGen, {genre}) => {
    mostComGen[genre] ? mostComGen[genre]++ : mostComGen[genre] = 1
    return mostComGen
  },{})

  return Object.entries(mostComGen).map(([name, count]) => (
    {name, count})).sort((a, b) => b.count - a.count).slice(0,5)
  }

function getMostPopularBooks(books) {
  return books.map(book => {
    return {
      name: book.title,
      count: book.borrows.length
    }
  }).sort((a, b) => b.count - a.count).slice(0,5)     
}

function getMostPopularAuthors(books, authors) {
  const mostPopArr = [];
  authors.forEach((author) => {
    const fromThisAuthor = books.filter((book) => book.authorId === author.id);
    let allBorrows = 0;
    fromThisAuthor.forEach((book) => (allBorrows += book.borrows.length));
    mostPopArr.push({
      name: author.name.first + " " + author.name.last,
      count: allBorrows,
    });
  });
  mostPopArr.sort((a, b) => (a.count < b.count ? 1 : -1));
    mostPopArr.length = 5;
    return mostPopArr;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
