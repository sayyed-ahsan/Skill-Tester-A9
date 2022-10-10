import React from 'react';
import { useLoaderData } from 'react-router-dom';

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
                    <div>
                        <h3 className='text-center'> {qustion.question}</h3>
                        <div>

                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Quiz;