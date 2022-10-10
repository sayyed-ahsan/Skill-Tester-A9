import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Quiz.css'
import { BsFillEyeFill } from 'react-icons/bs';
import Toast from 'react-bootstrap/Toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Quiz = () => {
    const quiz = useLoaderData();
    const qustions = quiz.data.questions;

    console.log(qustions)


    const [questionId, setQustionId] = useState('');

    const [showA, setShowA] = useState(false);

    const toggleShowA = (id) => {
        setShowA(!showA)
        setQustionId(id);
    };


    const checkAnswer = (givenAns, rightAnswer) => {
        if (givenAns === rightAnswer) {
            toast.success('Right Answer !')
        }
        else {
            toast.error('Opps Wrong !')
        }
    }


    return (
        <div>
            <h1>{quiz.length}</h1>

            {
                qustions.map(qustion =>

                    <div className='quiz-card'>
                        <div className='qustion-div'>
                            <h3 className='text-center'> {(qustion.question.slice(3)).slice(0, -4)}</h3>
                            <div>
                                <button onClick={() => toggleShowA(qustion.correctAnswer)} className='eye-button'>
                                    <BsFillEyeFill></BsFillEyeFill>
                                </button>
                            </div>
                        </div>
                        <div className='text-center quz-answer'>
                            <button onClick={() => checkAnswer(qustion.options[0], qustion.correctAnswer)} className='answer-btnn'>{qustion.options[0]}</button>
                            <button onClick={() => checkAnswer(qustion.options[1], qustion.correctAnswer)} className='answer-btnn'>{qustion.options[1]}</button>
                            <button onClick={() => checkAnswer(qustion.options[2], qustion.correctAnswer)} className='answer-btnn'>{qustion.options[2]}</button>
                            <button onClick={() => checkAnswer(qustion.options[3], qustion.correctAnswer)} className='answer-btnn'>{qustion.options[3]}</button>
                        </div>


                    </div>
                )
            }
            <div>

            </div>
            <div className='answer-tost'>
                <Toast show={showA} onClose={() => toggleShowA(0)}>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">Answer</strong>
                    </Toast.Header>
                    <Toast.Body>{questionId}</Toast.Body>
                </Toast>

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Quiz;