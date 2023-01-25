function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => a.name.last < b.name.last ? -1 : 1);
}

function getTotalNumberOfBorrows(account, books) {
  // set counter to get a point every time an ID matches
  let counter = 0;

  //native array methods and forEach to loop through and check IDs
  books.forEach((book) => book.borrows.forEach((isBorrowed) => (account.id === isBorrowed.id) 
  && counter++));
  return counter
}

function getBooksPossessedByAccount(account, books, authors) {
  //find what books are held
  let booksHeld = books.filter((book) => book.borrows[0].returned === false &&
   book.borrows[0].id === account.id);

   //get the details of the book including author
   let bookInfo = booksHeld.map((info) => ({
    ...info, author: authors.find((author) => author.id === info.authorId)
   }));
    return bookInfo;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
