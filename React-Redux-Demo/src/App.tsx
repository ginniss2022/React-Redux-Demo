import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './Redux/slice'

function App() {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch();

  return (
    <>
        <button onClick={() => dispatch(increment())}>
          count is {count}
        </button>
    </>
  )
}

export default App
