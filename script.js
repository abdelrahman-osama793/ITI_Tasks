db.student.find({
    firstName: "ahmed"
}).forEach(
    function (doc) {
        doc.gradeAndCoursesInfo.forEach(
            function (grades) {
                (print(grades.grade));
            }
        )
    }
)

db.students.aggregate([{
    $project: {
        fullName: {
            $avg: "$quizzes"
        },
        GPA: {
            db.student.find({
                firstName: "ahmed"
            }).forEach(
                function (doc) {
                    doc.gradeAndCoursesInfo.forEach(
                        function (grades) {
                            $avg:grades.grade
                        }
                    )
                }
            )
        },
    }
}])