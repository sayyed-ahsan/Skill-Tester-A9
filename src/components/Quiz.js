import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quiz = useLoaderData();
    console.log(quiz);
    return (
        <div>
            <h1>Quiz</h1>
            <h1>{quiz.length}</h1>
        </div>
    );
};

export default Quiz;