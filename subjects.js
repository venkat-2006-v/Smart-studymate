const express = require('express');
const router = express.Router();
const SubjectsController = require('../controllers/subjectsController');

const subjectsController = new SubjectsController();

// Route to get all subjects
router.get('/', subjectsController.getAllSubjects);

// Route to get a specific subject by ID
router.get('/:id', subjectsController.getSubjectById);

// Route to create a new subject
router.post('/', subjectsController.createSubject);

// Route to update an existing subject by ID
router.put('/:id', subjectsController.updateSubject);

// Route to delete a subject by ID
router.delete('/:id', subjectsController.deleteSubject);

module.exports = router;