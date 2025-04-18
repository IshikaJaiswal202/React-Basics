import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import SumOF from './components/SumOF';

function App() {
  const name="ishika jaiswal";
  return <div>     
     <p>This is your main App component.</p> 
     {/* //<h1>Hello {name} ! </h1> */}
        <Hello  date="18April2025"/>
        <SumOF/>
     </div>
  }

export default App;
