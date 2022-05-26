import React, { useState } from 'react';
import axios from 'axios';

function App() {
  let [person, setPerson] = useState([]);

  function searchApi() {
    const url = "/api/users"; // api 채우기
    axios.get(url)
      .then(function (response) {
        setPerson(response.data);
        console.log("성공");
      })
      .catch(function (error) {
        console.log("실패");
      });

  }

  // 조회 데이터 존재할 경우
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
      <div>
        <button onClick={searchApi}> 불러오기 </button>
      </div>
    );
  }
}
export default App;