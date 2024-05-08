function studentScore(score) {
    switch (true) {
        case (score >= 90):
            {
                return 'The student has scored A grade'
            }
        case (score >= 80 && score < 90):
            {
                return 'The student has score B grade'
            }
        case (score >= 70 && score < 80):
            {
                return 'The student has score C grade'
            }
        case (score >= 60 && score < 70):
            {
                return 'The student has score D grade'
            }
        case (score < 60 && score >= 35):
            {
                return 'The student has score E grade'
            }
        default:
            {
                return 'The student is failed!!!'
            }
    }

}

let stu1_score = 98;
let stu2_score = 89;
let stu3_score = 79;
let stu4_score = 60;
let stu5_score = 59;
let stu6_score = 34;
console.log(studentScore(stu1_score))
console.log(studentScore(stu2_score))
console.log(studentScore(stu3_score))
console.log(studentScore(stu4_score))
console.log(studentScore(stu5_score))
console.log(studentScore(stu6_score))

