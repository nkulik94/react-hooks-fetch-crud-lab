import React from "react";

function QuestionItem({ question, onDeleteQuestion, onChangeAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete() {
    fetch(`http://localhost:4000/questions/${id}`, {method: 'DELETE'})
      .then(r => r.json())
      .then(() => onDeleteQuestion(question))
  }

  function handlePatch(e) {
    const config = {
      method: "PATCH",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({correctIndex: e.target.value})
    }
    fetch(`http://localhost:4000/questions/${id}`, config)
      .then(r => r.json())
      .then(q => onChangeAnswer(q))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handlePatch}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
