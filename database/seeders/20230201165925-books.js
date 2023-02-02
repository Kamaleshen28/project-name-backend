'use strict';

// const fetchData = async (req, res) => {
//   const data = await fetch('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks');
//   const {books} = await data.json();
//   const array = books.reduce((acc, element) => {
//         return [...acc, element]
//   }, [])
//   console.log(array)
//   console.log(Array.isArray(array))
//   return array
// }
// const array = fetchData();

const array = [{"Author":"J K Rowling","id":10,"Name":"Harry Potter and the Sorcerers Stone (Harry Potter, #1)", createdAt: new Date(),
updatedAt: new Date()},{"Author":"J K Rowling","id":20,"Name":"Harry Potter and the Chamber of Secrets (Harry Potter, #2)", createdAt: new Date(),
updatedAt: new Date()},{"Author":"Sidney Sheldon","id":80,"Name":"If Tomorrow Comes (Tracy Whitney Series, #1)", createdAt: new Date(),
updatedAt: new Date()},{"Author":"Sidney Sheldon","id":100,"Name":"Tell Me Your Dreams", createdAt: new Date(),
updatedAt: new Date()},{"Author":"J K Rowling","id":30,"Name":"Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)", createdAt: new Date(),
updatedAt: new Date()},{"Author":"J K Rowling","id":40,"Name":"Harry Potter and the Goblet of Fire (Harry Potter, #4)", createdAt: new Date(),
updatedAt: new Date()},{"Author":"Sidney Sheldon","id":90,"Name":"Master of the Game", createdAt: new Date(),
updatedAt: new Date()},{"Author":"Sidney Sheldon","id":110,"Name":"The Other Side of Midnight (Midnight #1)", createdAt: new Date(),
updatedAt: new Date()},{"Author":"J K Rowling","id":50,"Name":"Harry Potter and the Order of the Phoenix (Harry Potter, #5)", createdAt: new Date(),
updatedAt: new Date()},{"Author":"J K Rowling","id":60,"Name":"Harry Potter and the Half-Blood Prince (Harry Potter, #6)", createdAt: new Date(),
updatedAt: new Date()},{"Author":"J K Rowling","id":70,"Name":"Harry Potter and the Deathly Hallows (Harry Potter, #7)", createdAt: new Date(),
updatedAt: new Date()},{"Author":"Sidney Sheldon","id":120,"Name":"Rage of Angels", createdAt: new Date(),
updatedAt: new Date()}];


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('books', array, {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('books', null, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
