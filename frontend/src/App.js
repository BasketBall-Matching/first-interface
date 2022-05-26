import React, { useState } from 'react';
import axios from 'axios';

function App() {
  let [person, setPerson] = useState([]);
  let [name, setName] = useState("");
  let [sex, setSex] = useState("");
  let [age, setAge] = useState("");

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onSexHandler = (event) => {
    setSex(event.currentTarget.value);
  };
  const onAgeHandler = (event) => {
    setAge(event.currentTarget.value);
  };

  function searchApi() {
    const url = "/api/users";
    axios.get(url)
      .then(function (response) {
        setPerson(response.data);
        console.log("성공");
      })
      .catch(function (error) {
        console.log("실패");
      });
  }

  function submitApi() {
    const url = "/api/users"; // api 채우기
    axios.post(url)
      .then(function (response) {
        setPerson(response.data);
        console.log("성공");
      })
      .catch(function (error) {
        console.log("실패");
      });
  }

  if (person.length > 0) {
    return (
      person.map(persons => (
        <div>
          <div >{persons.name}</div>
          <div>{persons.age}</div>
          <div> {persons.sex}</div>
        </div>
      ))
    );
  } else {
    return (
      <>
        <div>
          <button onClick={searchApi}> 불러오기 </button>
        </div>
        <form>
          <label htmlFor="name">
            이름
          </label>
          <input
            id="name"
            type="text"
            name="name"
            onChange={onNameHandler}
            value={name}
            placeholder="이름 ㄱㄱ"
          />
          <label htmlFor="sex">
            성별
          </label>
          <input
            id="sex"
            type="text"
            name="sex"
            onChange={onSexHandler}
            value={sex}
            placeholder="남여 중 하나 ㄱㄱ"
          />
          <label htmlFor="age">
            나이
          </label>
          <input
            id="age"
            type="text"
            name="age"
            onChange={onAgeHandler}
            value={age}
            placeholder="몇살이세요?"
          />
          <button type="submit">
            제 출
          </button>
        </form>
      </>
    );
  }
}
export default App;