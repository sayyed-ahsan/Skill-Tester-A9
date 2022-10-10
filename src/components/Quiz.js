import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Quiz.css'
import { BsFillEyeFill } from 'react-icons/bs';

const Quiz = () => {
    const quiz = useLoaderData();
    const qustions = quiz.data.questions;

    console.log(quiz);
    console.log(qustions);
    return (
        <div>
            <h1>{quiz.length}</h1>

            {
                qustions.map(qustion =>

                    <div className='quiz-card'>
                        <h3 className='text-center'> {qustion.question}</h3>
                        <BsFillEyeFill></BsFillEyeFill>
                        <div className='bg-warning text-center quz-answer'>
                            <h3>{qustion.options[0]}</h3>
                            <h3>{qustion.options[1]}</h3>
                            <h3>{qustion.options[2]}</h3>
                            <h3>{qustion.options[3]}</h3>
                        </div>

                    </div>
                )
            }
        </div>
    );
};

export default Quiz;