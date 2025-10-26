module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("movies", [
      {
        title: "Baahubali: The Beginning",
        type: "Movie",
        director: "S. S. Rajamouli",
        budget: "180 crores",
        location: "Hyderabad",
        duration: "159m",
        year_or_time: "2015",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Baahubali: The Conclusion",
        type: "Movie",
        director: "S. S. Rajamouli",
        budget: "250 crores",
        location: "Hyderabad",
        duration: "168m",
        year_or_time: "2017",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Mirzapur",
        type: "TV Show",
        director: "Karan Anshuman, Gurmmeet Singh",
        budget: "60 crores",
        location: "Mirzapur",
        duration: "3 Seasons",
        year_or_time: "2018",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "The Family Man",
        type: "TV Show",
        director: "Raj & DK",
        budget: "80 crores",
        location: "Delhi",
        duration: "2 Seasons",
        year_or_time: "2019",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("movies", null, {});
  },
};
