import { useState } from 'react'
import './NameTag.css'


function NameForm() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');

  function handleButton () {
    alert (
    `---Name Tag ---\nHello, my name is: ${name} \nTitle: ${title} \nCompany: ${company}`
    );
  }
  
  return (
    <div className='nameInput'>
      <h2>Name Tag Generator</h2>
      <input 
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br></br>
      <input 
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /><br></br>
      <input 
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      /><br></br>
      <div className='tag'> 
        <h3>Name Tag</h3>
        <p>Hello, my name is {name}</p>
        <p>{title}</p>
        <p>{company}</p>
        <button onClick={handleButton}>Download</button>
      </div>
    </div>
  );
}

export default NameForm;
