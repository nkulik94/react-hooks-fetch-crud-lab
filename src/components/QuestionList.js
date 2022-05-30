import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList( { questions, setQuestions } ) {

  function deleteQuestion(q) {
    setQuestions(questions.filter(question => question.id !== q.id))
  }

  function handleChange(q) {
    setQuestions(questions.map(question => question.id === q.id ? q : question))
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(q => <QuestionItem question={q} key={q.id} onDeleteQuestion={deleteQuestion} onChangeAnswer={handleChange} />)}</ul>
    </section>
  );
}

export default QuestionList;
