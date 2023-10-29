import Home from "./home/Home"
import NavigationBar from './navigation/NavigationBar'

function App() {

  return (
    <div className='d-flex flex-column'>
      <NavigationBar/>
      <Home/>
    </div>
  )
}

export default App
