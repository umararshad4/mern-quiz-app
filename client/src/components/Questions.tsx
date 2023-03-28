import { useState } from "react";
import { QuizProps } from "../App";

interface QuestionsProps {
    quizQuestions: QuizProps[] | undefined
}

const Questions = ({ quizQuestions }: QuestionsProps) => {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
    const [score, setScore] = useState(0)

    const handleNextQuestion = (answer: string) => {
        console.log(answer);
        if (quizQuestions && quizQuestions[currentQuestion].answer === answer) {
            setScore(score + 1)
            console.log('score' + score);

        }
        if (currentQuestion < 9) {
            setCurrentQuestion(currentQuestion + 1)
        }
        else {
            console.log("quiz is finished " + score + " is your score. ")
        }
    }
    return (
        <div>
            <h1>Question No: {currentQuestion + 1} -- {quizQuestions && quizQuestions[currentQuestion].question}</h1>
            <form>
                {
                    quizQuestions &&
                    quizQuestions[currentQuestion].options.map((item, index) => (
                        <div style={{ margin: "1rem", display: "flex", justifyItems: "center" }} key={index}>
                            <input type="checkbox" defaultChecked={false} value={score} name={item} id={item} onClick={() => handleNextQuestion(item)} />
                            <label htmlFor={item} style={{ margin: "1rem" }} >{item}</label>
                        </div>
                    ))
                }
                <div>Score: {score}</div>
            </form>
        </div>
    )
}

export default Questions;