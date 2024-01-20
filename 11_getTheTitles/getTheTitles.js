const getTheTitles = function(books) {
    
    //alert("HELLO");
    
    const titles = books.map(function(book) {
        return book.title;
    });

    return titles;

    //console.log(titles);

};

/*
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
];

getTheTitles(books);
*/

// Do not edit below this line
module.exports = getTheTitles;
