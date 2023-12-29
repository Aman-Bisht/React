import Effect from "./component/Effect"
import Callback from "./component/Callback"

function App() {

  return (
    <div className=" text-center bg-gray-400 text-white">
      <h1>Using useEffect React hook</h1>
      <Effect/>
      <h1>Using useCallback React hook</h1>
      <Callback />
    </div>
  )
}

export default App
