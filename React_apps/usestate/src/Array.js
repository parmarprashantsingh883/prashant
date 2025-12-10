import React, { useState } from 'react'
import Container from './Container';
import String from './String';
import Number from './Number';
import Boolean from './Boolean';
import Object from './Object';
import Arrays from './Arrays';
import StudentManager from './StudentManager';
import AdminPanel from './AdminPanel';

import BootstrapFormObject from './BootstrapFormObject';
import Formprevent from './Formprevent';
import UserForm from './UserForm';
import BasicValidationForm from './BasicValidationForm';

function Array() {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Mango"]);

  const add = () => {
    setFruits([...fruits, "Kiwi"]);
    console.log(fruits);
  };
  const [users, setUsers] = useState([
    { id: 1, name: "Aman" },
    { id: 2, name: "Prashant" },
    { id: 3, name: "Riya" }
  ]);


  return (
    <div>
      <Container>
        1️⃣ useState with String
<String/>
      </Container>
      
      <Container>
        2️⃣ useState with Number
        <Number/>
      </Container>
      <Container>
        3️⃣ useState with Boolean
        <Boolean/>
        </Container>
        <Container>
          1️⃣ Basic Object State
          <Object/>
        </Container>
        <Container>
          1️⃣ Basic Array State
            2️⃣ Adding Items to Array
          <Arrays/>
          
        </Container>
        <Container>
       <StudentManager/>

        </Container>
        <Container>
          <AdminPanel/>
        </Container>
<BootstrapFormObject/>
<Container>
  <Formprevent/>
</Container>
<Container>
  <UserForm/>

</Container>
<Container>
  <BasicValidationForm/>
</Container>

    </div>
  );
}

export default Array;
