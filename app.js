const question = [{
    'que': 'which of the following is markup language?'
    'a': 'HTML'
    'b': 'css'
    'c': 'js'
    'd': 'php'
    'correct': 'a'
},
{
    'que': 'what was the year js launched?'
    'a': '1990'
    'b': '1999'
    'c': '1980'
    'd': '1995'
    'correct': 'd'
},
]
let index = 0;
const loadQuestion = () => {
    const data = questions[index]
    console.log(data)
}
// initial call
loadQuestion();
