import { useEffect, useState } from 'react'
import axios from 'axios'
import Questions from './components/Questions'

export interface QuizProps {
  id: string
  question: string
  options: string[]
  answer: string
}

function App() {
  const [quiz, setQuiz] = useState<QuizProps[]>()

  useEffect(() => {
    const fetchQuestions = async () => {
      const questions = await axios.get('http://localhost:4000/quiz/v1/questions')
      setQuiz(questions.data)
    }
    fetchQuestions()
  }, [])


  return (
    <div>
      <Questions quizQuestions={quiz} />
    </div>
  )
}

export default App