// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const Student = require('./models/student')
const Campus = require('./models/campus')

const campuses = [
    {
        id: 0,
        name: "Not Enrolled",
        imgUrl: 'https://image.shutterstock.com/image-vector/abstract-school-building-silhouette-on-600w-222076837.jpg',
        address: 'Not applicable',
        description: 'Students yet to be registered'
    },
    {
        id: 1,
        name: "New York University",
        imgUrl: 'https://static.toiimg.com/thumb/msid-64837334,width-1200,height-900,resizemode-4/.jpg',
        address: '70 Washington Sq S, New York, NY 10012, United States',
        description: 'Private research university in New York City'
    },
    {
        id: 2,
        name: "University of Cambridge",
        imgUrl: 'https://www.kings.cam.ac.uk/sites/default/files/styles/square_400/public/2021-05/Cambridge_1_0.jpg?h=fc45aa2d&itok=4EqUD4JN',
        address: 'The Old Schools, Trinity Ln, Cambridge CB2 1TN, United Kingdom',
        description: 'Public research university in Cambridge, England'
    },
    {
        id: 3,
        name: "Stanford University",
        imgUrl: 'https://www.stanforddaily.com/wp-content/uploads/2019/11/1107_ST_stanfordbuilding_01-696x464.jpg',
        address: '450 Serra Mall, Stanford, CA 94305, United States',
        description: 'Private research university in Stanford, California'
    },
    {
        id: 4,
        name: "University of Tokyo",
        imgUrl: 'https://www.u-tokyo.ac.jp/content/400097374.jpg',
        address: '7 Chome-3-1 Hongo, Bunkyo City, Tokyo 113-8654, Japan',
        description: 'Public research university in Tokyo, Japan'
    }
];

const students = [
    {
        firstName: "John",
        lastName: "Smith",
        email: 'jsmith@example.com',
        imgUrl: 'https://example.com/images/jsmith.jpg',
        gpa: 3.7,
        campusId: 1
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        email: 'jdoe@example.com',
        imgUrl: 'https://example.com/images/jdoe.jpg',
        gpa: 3.5,
        campusId: 2
    },
    {
        firstName: "Adam",
        lastName: "Garcia",
        email: 'agarcia@example.com',
        imgUrl: 'https://example.com/images/agarcia.jpg',
        gpa: 2.8,
        campusId: 1
    },
    {
        firstName: "Sarah",
        lastName: "Kim",
        email: 'skim@example.com',
        imgUrl: 'https://example.com/images/skim.jpg',
        gpa: 4.0,
        campusId: 2
    },
    {
        firstName: "Michael",
        lastName: "Nguyen",
        email: 'mnguyen@example.com',
        imgUrl: 'https://example.com/images/mnguyen.jpg',
        gpa: 3.9,
        campusId: 2
    },
    {
        firstName: "Emily",
        lastName: "Wong",
        email: 'ewong@example.com',
        imgUrl: 'https://example.com/images/ewong.jpg',
        gpa: 3.2,
        campusId: 1
    }
];




const syncAndSeed = async () => {
  try {
  await db.sync({force: true});
  
  await Promise.all(campuses.map(campus => Campus.create(campus)));
  await Promise.all(students.map(student => Student.create(student)));
  
//   await db.close();
  
  console.log("Successfully seeded the database!");
  } catch (error) {
  console.error("There was a problem seeding the database", error);
//   await db.close();
  }
  };

Student.belongsTo(Campus, {foreignKey: 'campusId'})
Campus.hasMany(Student)


module.exports = {
    // Include your models in this exports object as well!
    db,
    syncAndSeed,
    Student,
    Campus

}