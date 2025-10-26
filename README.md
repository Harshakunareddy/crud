
This is a simple **Movies CRUD** built using:
- **Node.js + Express** for the backend
- **Sequelize ORM** for database operations
- **PostgreSQL (Render Cloud)** as the database
- **Joi** for validation
- **EJS** for frontend view rendering

---

##  Features
1. Create new movie
2. Read all movies with search feature also included 
3. Update movie details  
4. Delete a movie  
5. Postman collection included  

---

##  Installation & Setup

1. After cloning enter npm install for installing the packages.
2. after that inside the routes folder we will have the routes
3. for running the project => npx nodemon index.js


## seeding the data
1. Enter this to seed the data in the database
    => npx sequelize-cli db:seed --seed movies-seeder-file.js


