const Options = ({ totalFeedback, updateFeedback, clearFeedback }) => {
  return (
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button
          onClick={() => {
            clearFeedback();
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
