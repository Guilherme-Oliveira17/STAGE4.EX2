const students = [
    {
    name: "Vanessa",
    noteOne: 5,
    noteTwo: 8
    
    },
    {
    name: "Guilherme",
    noteOne: 7,
    noteTwo: 8
    },
    {
    name: "Kaynielle",
    noteOne: 3,
    noteTwo: 5
    },
    {
    name: "Theobaldo",
    noteOne: 10,
    noteTwo: 10
    }
    
]
//Guardar primeira memoria: calculo da media. Onde precisa de dados de nota 1 e nota2//  
function calcularMedia(noteOne, noteTwo){
    return ((noteOne + noteTwo) / 2)
}
//Guardar segunda memoria: Necessário dado STUDENT//
function printMedia (student){
    return `
    A média do(a) aluno(a) ${student.name} é ${calcularMedia (student.noteOne, student.noteTwo)}`
    
}
//declara student para o objeto de students//
for(let student of students){
    let messageMedia = printMedia(student)
    if(calcularMedia(student.noteOne, student.noteTwo) > 7){
        alert(messageMedia +
        `\n Parabéns, ${student.name}! Você foi aprovado no concurso`)
    } else
   alert(messageMedia +
    `\n Não foi dessa vez, ${student.name}! Tente novamente!`)
}


