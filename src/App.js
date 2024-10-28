import './App.css';
import DateDisplay from './Components/DateDisplay';
import DatePicker from './Components/DatePicker';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="date-container">
        <DatePicker />
      </div>
    </div>
  );
}

export default App;
