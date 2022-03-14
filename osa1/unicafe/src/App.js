import { useState } from "react";

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const sum = good + neutral + bad;

  if (sum !== 0) {
    return (
      <div>
        <p>average {(good - bad) / sum}</p>
        <p>positive {(good / sum) * 100} %</p>
      </div>
    );
  } else {
    return <div>No feedback given</div>;
  }
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const StatisticLine = (props) => {
  return (
    <div>
      <p>
        {props.text} {props.value}
      </p>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodFb = () => {
    setGood(good + 1);
  };

  const neutralFb = () => {
    setNeutral(neutral + 1);
  };

  const badFb = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={goodFb} text="good" />
      <Button onClick={neutralFb} text="neutral" />
      <Button onClick={badFb} text="bad" />
      <h1>statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
