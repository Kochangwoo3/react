//fetch(`https://jsonplaceholder.typicode.com/users`)
//fetch(`https://api.github.com/users/hosiceom`)
fetch(`https://api.github.com/users/moonhighway`)
  .then((response) => response.json())
  .then(console.log)
  .catch(console.error);
