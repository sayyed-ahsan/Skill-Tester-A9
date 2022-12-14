import { Link, useLoaderData } from 'react-router-dom';
import './Home.css';
import image from './Images/4b78166fc51592e02a76f7ab344e93cd.jpg';
import { BiRightArrowAlt } from 'react-icons/bi';


const Home = () => {

    const quizes = useLoaderData();



    return (
        <div>
            <div className='header'>
                <div className='image'>
                    <img src={image} alt="" />
                </div>
                <div>
                    <h2 className='home-title'>Skills help you perform your daily tasks on <br /> behalf of the business you work for.</h2>
                </div>
            </div>
            <div className='all-quiz-cards'>
                {
                    quizes?.data?.map(quiz =>
                        <div className='quiz'>
                            <div className='quiz-img-div'>
                                <img className='quiz-img mx-auto' src={quiz.logo} alt="" />
                            </div>
                            <h4 className='text-center my-4'>{quiz.name}</h4>
                            <Link to={`/quiz/${quiz.id}`} className='link-button'>
                                <div className='button'>
                                    <button className='test-button'>Start {quiz.name} Quiz
                                        <BiRightArrowAlt className='icon'></BiRightArrowAlt>
                                    </button>
                                </div>
                            </Link>
                        </div>)
                }
            </div>


        </div>
    );
};

export default Home;