import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    address: "",
    department: "",
    salary: "",
    maritalStatus: false
  })

  const [data, setData] = useState([])
  function submitForm() {
    fetch('http://localhost:8080/userdata', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }).then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }
  useEffect(() => {
    fetch("http://localhost:8080/userdata").
      then(res => res.json()).
      then(data => {
        setData(data)
      })
  }, [form])
  return (
    <>

      <div className='App'>
        <h1>USER DETAIL FORM</h1>
        </div>

        <div className='parent'>

        <div className='formInput'>
        <label>Name:</label>
        <input name='name' onChange={(e) => { setForm({ ...form, name: e.target.value }) }} />
        <br />
        <br />
        <label>age:</label>
        <input name='age' onChange={(e) => { setForm({ ...form, age: e.target.value }) }} />
        <br />
        <br />
        <label>address:</label>
        <input name='address' onChange={(e) => { setForm({ ...form, address: e.target.value }) }} />
        <br />
        <br />
        <label>department:</label>
        <select onChange={(e) => {
          console.log(e.target.value)
          setForm({ ...form, department: e.target.value })
        }}>
          <option value="it">it</option>
          <option value="hr">hr</option>
          <option value="marketing">marketing</option>
        </select>
        < br />
        < br />
        <label>salary:</label>
        <input name='salary' onChange={(e) => { setForm({ ...form, salary: e.target.value }) }} />
        <br />
        <br />
        <label>marital Status:</label>
        <input type="checkbox" checked={form.maritalStatus} onChange={() => { setForm({ ...form, maritalStatus: !form.maritalStatus }) }} />
        <br />
        <br />
        <button onClick={() => { submitForm() }}>submit</button>
        <br />
        <br />

      </div>

        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>age</th>
              <th>address</th>
              <th>department</th>
              <th>salary</th>
              <th>marital Status</th>
            </tr>

          </thead>
          {
            data.map(
              (datum)=>
              
              <tr>
                  <td>
                    {datum.id}
                  </td>
                  <td>
                    {datum.name}
                  </td>
                  <td>
                    {datum.age}
                  </td>
                  <td>
                    {datum.address}
                  </td>
                  <td>
                    {datum.department}
                  </td>
                  <td>
                    {datum.salary}
                  </td>
                  <td>
                    {datum.maritalStatus?"Married":"Unmarried"}
                  </td>
                </tr>
              
              )
            }
        </table>
        
            </div>
    </>
  );
}

export default App;
