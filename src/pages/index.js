import { useState } from 'react';
import Head from 'next/head';
// import dynamic from 'next/dynamic';
// const TodoItem = dynamic(() => import('../components/TodoItem'));

export function TodoItem(props) {
  const { todo, onClick } = props;

  function handleClick(e) {
    if (onClick) {
      onClick(e, todo);
    }
  }

  return (
    <>
      <input type='checkbox' className='checkbox' onChange={handleClick} checked={todo.checked} />
      <h3 style={todo.checked ? { textDecoration: 'line-through', opacity: 0.5 } : null}>{todo.todo || ''}</h3>
      <style jsx>{`
        .checkbox {
          margin-right: 18px;
        }
      `}</style>
    </>
  );
}

export default function Home() {

  const [todos, setTodos] = useState([
    {
      id: '123',
      todo: 'Find in-depth information about Next.js features and API.',
      checked: false
    },
    {
      id: '246',
      todo: 'Learn about Next.js in an interactive course with quizzes!',
      checked: false
    }
  ]);

  function toggleTodo(e, todo) {
    setTodos(todos.map(item => item.id === todo.id ? { ...todo, checked: !todo.checked } : item));
  }

  return (
    <div className="container">
      <Head>
        <title>NextJS ToDo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to ToDo!</h1>
        <div className="grid">
          {todos && todos.length ? todos.map(todo => (
            <div className="card" key={todo.id}>
              <TodoItem todo={todo} onClick={toggleTodo} key={`item-${todo.id}`} />
            </div>
          )) : null}
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin: 1rem;
          padding: 1.5rem;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
