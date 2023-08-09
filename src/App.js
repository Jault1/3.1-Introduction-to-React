import './App.css';
import avatar from './assets/images/sdDG-generic.png'; // Tell webpack this JS file uses this image

function App() {
  return (
    <div className="App">
   <img src={avatar} alt="avatar" height='250' />;
      <h1>John Smith</h1>
      <h3>Software Engineer</h3>
      <div className="borderDiv" style={{border: 1 + 'px solid black', padding: 20 + 'px', width: 600 + 'px', margin: 'auto', marginBottom: 20 + 'px'}}>
        <strong>About me</strong><br></br>
        <hr></hr>
        I am an advocate of self-improvement and I want to help people improve their lives through knowledge and application
      </div>

      <div className="borderDiv" style={{border: 1 + 'px solid black', padding: 20 + 'px', width: 600 + 'px', margin: 'auto', marginBottom: 20 + 'px'}}>
        <strong>Contact me</strong><br></br>
        <hr></hr>
        Email: <a href='mailto:sample_john_smith@mail.com'>sample_john_smith@mail.com</a> | LinkedIn: <a href="https://www.linkedin.com/">https://www.linkedin.com/</a>


      </div>
    </div>
  );
}

export default App
