import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='outer-wrapper'>
        <div className='wrapper'>
          <div className='slide one'></div>
          <div className='slide two'></div>
          <div className='slide three'></div>
          <div className='slide four'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
