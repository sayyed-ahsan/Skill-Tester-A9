import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import Home from './components/Home';
import Main from './components/Main';
import Statestic from './components/Statestic';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quiz from './components/Quiz';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home></Home>
      },
      {
        path: 'stastic',
        element: <Statestic></Statestic>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'quiz/:quizId',
        loader: async ({ params }) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        },
        element: <Quiz></Quiz>
      },
      {
        path: '/*',
        element: <div className='text-center'><h1>Opps...! <br />Pag Not Found </h1></div>
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider
        router={router}
      ></RouterProvider>
    </div>
  );
}

export default App;
