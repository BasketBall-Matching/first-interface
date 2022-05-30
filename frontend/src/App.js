import React, { useState } from 'react';
import axios from 'axios';

function App() {
  let [person, setPerson] = useState([]);
  const [name, setName] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onSexHandler = (event) => {
    setSex(event.currentTarget.value);
  };
  const onAgeHandler = (event) => {
    setAge(event.currentTarget.value);
  };

  console.log(name, sex, age);

  function searchApi() {
    const url1 = "/api/users";
    axios.get(url1)
      .then(function (response) {
        setPerson(response.data);
        console.log("GET 성공");
      })
      .catch(function (error) {
        console.log("GET 실패");
      });
  }

  const submitApi = (event) => {
    const url2 = "/api/users"; // api 채우기

    if (name === "") {
      event.preventDefault();
      return alert("이름 쓰세요");
    } else if (sex === "") {
      event.preventDefault();
      return alert("성별 쓰세요");

    } else if (age === "") {
      event.preventDefault();
      return alert("나이 쓰세요");
    }

    axios.post(url2, { name, sex, age })
      .then(function (response) {
        console.log(response.data);
        console.log("POST 성공");
      })
      .catch(function (error) {
        console.log("POST 실패");
      });
  };


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
        <form
          id='exform'
          onSubmit={submitApi}
          encType="multipart/form-data"
        >
          <div className='wrapper'>
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
          </div>
        </form>

      </>
    );
  }
}
export default App;