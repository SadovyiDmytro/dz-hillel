import React, { useState } from 'react';

const SmileyList = () => {
  const [smileys, setSmileys] = useState([
    { id: 1, name: '😊', count: 0 },
    { id: 2, name: '😂', count: 0 },
    { id: 3, name: '😍', count: 0 },
  ]);
  const [winner, setWinner] = useState(null);

  const handleSmileyClick = (id) => {
    setSmileys((prevSmileys) =>
      prevSmileys.map((smiley) =>
        smiley.id === id ? { ...smiley, count: smiley.count + 1 } : smiley
      )
    );
  };

  const handleShowResults = () => {
    let maxCount = 0;
    let winnerIndex = null;

    for (let i = 0; i < smileys.length; i++) {
      if (smileys[i].count > maxCount) {
        maxCount = smileys[i].count;
        winnerIndex = i;
      }
    }

    setWinner(smileys[winnerIndex]);
  };

  return (
    <div>
      {smileys.map((smiley) => (
        <div key={smiley.id} onClick={() => handleSmileyClick(smiley.id)}>
          {smiley.name} - {smiley.count}
        </div>
      ))}
      <button onClick={handleShowResults}>Show Results</button>
      {winner && (
        <div>
          The winner is {winner.name} with {winner.count} votes!
        </div>
      )}
    </div>
  );
};

export default SmileyList;
