var questionsArr = [

    {
        question: 'Camels have three sets of eyes.',
        answer: false
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
        question: 'Sharks are mammals.',
        answer: false
    },

    {
        question: 'Sloths take twelve weeks to digest food.',
        answer: false
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

var trueAnswers = 0;

function runQuiz() {

    for (i = 0; i < questionsArr.length; i++) {
        var answer = confirm(questionsArr[i].question)
        if (questionsArr.answer = true){
            confirm = trueAnswers++
        }
        if (questionsArr.answer = false){
            confirm = trueAnswers--
        }
    }
    
    
    
}

