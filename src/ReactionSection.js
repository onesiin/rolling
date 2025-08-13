import React from 'react';

const reactions = [
  { id: 1, count: 24, icon: '👍' },
  { id: 2, count: 24, icon: '😂' },
  { id: 3, count: 12, icon: '❤️' },
  { id: 4, count: 24, icon: '👏' },
  { id: 5, count: 8, icon: '🎉' },
  { id: 6, count: 10, icon: '🥳' },
];

const ReactionItem = ({ count, icon }) => (
  <div className="reaction-item">
    <span className="reaction-icon">{icon}</span>
    <span className="reaction-count">{count}</span>
  </div>
);

const ReactionSection = () => {
  return (
    <section className="reaction-section">
      <div className="section-text">
        <div className="point-badge">Point. 02</div>
        <h2>서로에게 이모지로 감정을<br />표현해보세요</h2>
        <p>롤링 페이퍼에 이모지를 추가할 수 있어요.</p>
      </div>
      <div className="reaction-display">
        <div className="reaction-grid">
          {reactions.map((reaction) => (
            <ReactionItem key={reaction.id} {...reaction} />
          ))}
        </div>
        <div className="add-reaction-button">
          <span className="plus-icon">+</span>
        </div>
      </div>
    </section>
  );
};

export default ReactionSection;
