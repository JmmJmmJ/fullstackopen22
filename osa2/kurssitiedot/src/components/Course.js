const Header = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part part={part} key={part.id} />
      ))}
    </div>
  );
};

const Part = ({ part }) => {
  return (
    <div>
      <p>
        {part.name} {part.exercises}
      </p>
    </div>
  );
};

const Total = ({ parts }) => {
  let sum = 0;
  parts.map((part) => (sum = sum + part.exercises));

  return (
    <div>
      <p>Number of exercises {sum}</p>
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header header={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
