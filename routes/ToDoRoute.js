const { Router } = require("express");

const {  saveToDo, deleteToDo, updateToDo, getToDo } = require("../controllers/ToDoController");

const router = Router();

router.get("/", getToDo);

router.post("/save", saveToDo);

router.post("/update", updateToDo);

router.post("/delete", deleteToDo);

module.exports = router;