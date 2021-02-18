import React from 'react'

import {
  Link,
} from 'react-router-dom'


export const HomePage = () => {
  return (          
    <main role="main" className="hp__main">
      <h1 className="hp__header">Amigoweb Demo</h1>

      <p className="hp__task">1. Using <a href="https://www.figma.com/file/2nLyK6iFH7pzSZuBWN8inZ/Amigoweb" target="blank">this Figma project</a> create the HTML layout for a ReactJS form component. Don't use any UI libraries.</p>

      <p className="hp__task">2. The form must have the fluid HTML layout.  The minimal screen width is 360px.</p>

      <p className="hp__task">3. Set up the validation: </p>

      <ul className="hp__subtask">
        <li>- The form submit button should be disabled until all the form fields are filled correctly. </li>
        <li>- The field “Name” may not contain digits or symbols except whitespaces or dashes.</li>
        <li>- The field “Email” may accept emails only.</li>
        <li>- The field “Phone Number” may accept only 11 digits, parentheses, the dash and the plus sign.</li>
      </ul>      

      <p className="hp__task">4. The complete task should be uploaded as a repository to either GitHub or GitLab.</p>
      
      <Link to={'login'} className="hp__login-link">Logging in &raquo;</Link>
    </main>
  )
}
