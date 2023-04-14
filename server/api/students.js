const router = require("express").Router();
const { Student, Campus } = require("../db");

// GET /api/students
router.get("/", async (req, res, next) => {
  try {
    const students = await Student.findAll({
      where: req.query,
      include: [Campus],
    });
    res.json(students);
  } catch (error) {
    next(error);
  }
});

// POST /api/students
router.post('/', async(req,res,next)=>{
  try{
    res.send(await Student.create(req.body))
  }
  catch(error){
    console.log(error)
  }
})

// GET /api/students/:studentId
router.get("/:studentId", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.studentId, {
      include: [Campus],
    });
    console.log(student);
    res.json(student);
  } catch (error) {
    next(error);
  }
});


// DELETE /api/students/:studentId
router.delete("/:studentId", async (req, res, next)=>{
  try{
    const student = await Student.findByPk(req.params.studentId);
    await student.destroy();
    res.send(student);
  }
  catch(error){
    console.log(error)
  }
})

// PUT /api/students/:id
router.put('/:id', async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);
    res.send(await student.update(req.body));
  } catch (error) {
    next(error);
  }
});


module.exports = router;