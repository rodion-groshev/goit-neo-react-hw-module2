import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [feedbacks, setFeedbacks] = useState(
    getLS()
      ? getLS()
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        }
  );

  useEffect(() => {
    window.localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  function getLS() {
    const savedFeedback = window.localStorage.getItem("feedbacks");
    return JSON.parse(savedFeedback);
  }

  const updateFeedback = (feedbackType) => {
    setFeedbacks({ ...feedbacks, [feedbackType]: feedbacks[feedbackType] + 1 });
  };

  const clearFeedback = () => {
    setFeedbacks({
      ...feedbacks,
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  return (
    <>
      <Description />
      <Options
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
        clearFeedback={clearFeedback}
      />
      {totalFeedback ? (
        <Feedback feedbacks={feedbacks} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
