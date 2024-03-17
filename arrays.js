const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій",
"Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів",
"Алгоритми структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
// 1.
const pairStudent = (students) => {
    const newArrPair = []
    const arrWoman = []
    const arrMan = []
    for(let i = 0; i < students.length; i ++){
        const lastLetter = students[i][students[i].length-1].toLowerCase()
        if(lastLetter === 'а') {
            arrWoman.push(students[i])
        }else{
            arrMan.push(students[i])
        }
    }
    for(let i = 0; i < (arrMan.length, arrWoman.length); i++){
        newArrPair.push([arrMan[i],arrWoman[i]])
    }
    return newArrPair
}
const result = pairStudent(students)
console.log(pairStudent(students));

// 2.
const studentThemes = (result, themes) => {
    const newArrStdThm = []
    for(let i = 0; i < themes.length; i ++){
        const localResult = []
        const strPair = `${result[i][0]} і ${result[i][1]}`
        localResult.push(strPair)
        localResult.push(themes[i])
        newArrStdThm.push(localResult)
    }
    return newArrStdThm
}
const rsltStudentThemes = studentThemes(result,themes)
console.log(studentThemes(result, themes));

// 3.
const stdMrks = (students, marks) => {
    const newStdMrks = []
    for(let i = 0; i < (students.length, marks.length); i++){
        const localStdMrks = []
        const pairStdMrks = `${students[i]} : ${marks[i]}`
        localStdMrks.push(pairStdMrks)
        newStdMrks.push(localStdMrks)
    }
    return newStdMrks
}
console.log(stdMrks(students, marks));

// 4.
const getRandomMarks = (rsltStudentThemes) => {
    const mainResult = []
    for(let i = 0; i < rsltStudentThemes.length; i++){
        const localRsltRndm = []
        const randomNum = Math.floor(Math.random()*5)+1
        const mainPair = `${rsltStudentThemes[i]} : ${randomNum}`
        localRsltRndm.push(mainPair)
        mainResult.push(localRsltRndm)
    }
    return mainResult
}
console.log(getRandomMarks(rsltStudentThemes));