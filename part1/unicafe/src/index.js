import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({ onClick, text }) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

const Statistic = ({ text, value }) => {
  return (
    <div>
      <p>{text} {value}</p>
    </div>
  )
}; 

const Statistics = ({ good, neutral, bad }) => {
  const all = () => good + neutral + bad;

  return (
    <div>
      <h1>Statistics</h1>
      {all() > 0 &&
        <div>
          <table>
            <tbody>
              <tr><td><Statistic text="good" value={good}/> </td></tr>
              <tr><td><Statistic text="neutral" value={neutral}/></td></tr>
              <tr><td><Statistic text="bad" value={bad}/></td></tr>
              <tr><td><Statistic text="all" value={all()}/></td></tr>
              <tr><td><Statistic text="average" value={(good - bad)/all()}/></td></tr>
              <tr><td><Statistic text="positive" value={((good/all()) * 100) + " %"}/></td></tr>
            </tbody>
          </table>
        </div>
      }
      {all() <= 0 &&
        <div>
          <p>No feedback given</p>
        </div>
      }
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <Button text="good" onClick={() => setGood(good + 1)} />
        <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
        <Button text="bad" onClick={() => setBad(bad + 1)} />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);