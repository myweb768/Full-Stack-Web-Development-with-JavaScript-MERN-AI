import './App.css'
import Counter from './components/counter'

function App() {

  return (
    <>
      <h4 className='my-4'>Module 21 || First React Assignment</h4>
      <div>
      <h1>Counter App</h1>
      <Counter initialCount={0}/>
      </div>
      
    </>
  )
}

export default App
