var questionsArr = [

    {
        question: 'Camels have three sets of eyelids.',
        answer: true
    },

    {
        question: 'A group of monkeys is called a barrel.',
        answer: true
    },

    {
        question: 'Crocodiles shed tears when they eat food.',
        answer: true
    },

    {
        question: 'Sharks are not mammals.',
        answer: true
    },

    {
        question: 'Sloths take two weeks to digest food.',
        answer: true
    },

    {
        question: 'A group of jellyfish is called a smack.',
        answer: true
    },

    {
        question: 'Sea otters have favourite rocks that they use to crack open their food.',
        answer: true
    }


]

var correctAnswers = 0;

function runQuiz() {

    for (i = 0; i < questionsArr.length; i++) {
        var answer = confirm(questionsArr[i].question)
        if (answer) {
            correctAnswers++
        }
    }

    results = Math.round((correctAnswers/7) * 100)

    
    if (correctAnswers === 7){
        alert ("Congrats you got 100% !")
    }
    else {
        alert ("Your score is " + results + "%")
    }

}

