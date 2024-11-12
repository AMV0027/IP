import { React, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('select');
  const [result, setResult] = useState('fill form');

  const handleSubmit = (event) => {
    event.preventDefault();
    setData([...data, { name, rollNo, email, course }]);
    setResult("Form filled");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name: <input type="text" placeholder='name'
          onChange={(e) => setName(e.target.value)}
        /> <br />
        Roll.no: <input type="text" placeholder='roll.no'
          onChange={(e) => setRollNo(e.target.value)}
        /> <br />
        email: <input type="text" placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
        /> <br />
        Course:
        <select onChange={(e) => setCourse(e.target.value)}>
          <option value="select">--select a course--</option>
          <option value="DA">Data Analytics</option>
          <option value="IP">Inter net programming</option>
          <option value="SDN">Software defined Networks</option>
        </select><br />
        <input type="submit" value="submit" />
        <p>{result}</p>
      </form>

      {data.length > 0 && (
        <div>
          <h1>Filled Forms:</h1>
          {data.map((item, index) => (
            <div key={index}>
              <p><b>Name:</b> {item.name}</p>
              <p><b>Roll No:</b> {item.rollNo}</p>
              <p><b>Email:</b> {item.email}</p>
              <p><b>Course:</b> {item.course}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App