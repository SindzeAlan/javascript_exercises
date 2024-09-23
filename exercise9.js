/*

9. **Filter Method:**
   Given an array of objects representing books (each object has properties `title` and `pages`), use the `filter` method to create a new array containing only the books with more than 300 pages.

*/ 

const books = [
  { title: 'rich dad poor dad', pages: 500 },

  { title: 'the richest man of babylon', pages: 180 },

  { title: 'la chevre de ma mere', pages: 120 },

  { title: 'the reasons of my wealth', pages: 600}
];

const filteredBooks = books.filter((value) => {
  return value.pages > 300;
});

console.log(filteredBooks);