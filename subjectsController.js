class SubjectsController {
    constructor() {
        this.subjects = [
            {
                id: 1,
                title: "Mathematics",
                description: "From algebra to calculus, we've got you covered."
            },
            {
                id: 2,
                title: "Science",
                description: "Dive into biology, chemistry, and physics."
            },
            {
                id: 3,
                title: "History",
                description: "Explore the events that shaped our world."
            }
        ];
    }

    getAllSubjects(req, res) {
        res.json(this.subjects);
    }

    getSubjectById(req, res) {
        const subjectId = parseInt(req.params.id, 10);
        const subject = this.subjects.find(sub => sub.id === subjectId);
        
        if (subject) {
            res.json(subject);
        } else {
            res.status(404).json({ message: "Subject not found" });
        }
    }
}

export default new SubjectsController();