import { useAllMoviesQuery, useAllPersonsQuery } from "@test/gql"
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { data: allMovies } = useAllMoviesQuery()
  const { data: allPeople } = useAllPersonsQuery()
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Sanity Test</p>
      </header>
      <div>
        <a
          href="https://xvjsnqg9.sanity.studio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Edit me!
        </a>
        <div>
          <h2>Movies:</h2>
          {allMovies?.allMovie.map((m) => (
            <div key={m._id}>{m.title}</div>
          ))}
        </div>
        <div>
          <h2>More:</h2>
          {allPeople?.allPerson.map((m) => (
            <div key={m._id}>{m.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App
