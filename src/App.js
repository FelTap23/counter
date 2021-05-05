import './components/counter/Counter'
import Counter from './components/counter/Counter'

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Counter valueIncrement = {1}></Counter>
      <Counter valueIncrement = {5}></Counter>
      <Counter valueIncrement = {10}></Counter>
    </div>
  );
}

export default App;
