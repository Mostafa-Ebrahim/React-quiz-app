import quizCompletedImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers }) {
  const skipped = userAnswers.filter((answer) => answer === null).length;
  const correct = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  ).length;
  const wrong = userAnswers.filter(
    (answer, index) => answer !== null && answer !== QUESTIONS[index].answers[0]
  ).length;

  
  return (
    <div id="summary">
      <img src={quizCompletedImg} alt="quiz completed" />
      <h2>Quiz completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{Math.round(skipped/QUESTIONS.length*100)}%</span>
          <span className="text">Questions skipped</span>
        </p>
        <p>
          <span className="number">{Math.round(correct/QUESTIONS.length*100)}%</span>
          <span className="text">Answered correctly</span>
        </p>
        <p>
          <span className="number">{Math.round(wrong/QUESTIONS.length*100)}%</span>
          <span className="text">Answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
