import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from '../components/SearchBar'

function App() {
  const [issues, setIssues] = useState([])

  useEffect(() => {
    fetch(`https://api.github.com/repos/facebook/react/issues`)
      .then(response => response.json())
      .then((results) => {
        console.log(results)
        setIssues(results)
      }).catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <>
    </>
  )
}

export default App
