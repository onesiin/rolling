// src/RollingPaperSection.js

import React from 'react';

const messages = [
  {
    id: 1,
    name: '김하나',
    relation: '친구',
    date: '2023.07.08',
    text: '코로나가 잠잠해져 개학을 부르는 모습이에요. 건강, 행복 모두 조심 또 조심!',
    profileImg: '/src/assets/profile1.jpg'
  },
  {
    id: 2,
    name: '박규영',
    relation: '동료',
    date: '2023.07.08',
    text: '일과자가 될 시간입니다. 세계에는 겨울, 진눈깨비는 여름, 아침저녁으로는 가을을 느끼는 것도 좋을 것 같아요...',
    profileImg: '/src/assets/profile2.jpg'
  },
];

const MessageCard = ({ name, relation, date, text, profileImg }) => (
  <div className="message-card">
    <div className="message-header">
      <div className="profile-image">
        <img src={profileImg} alt={`${name}의 프로필`} />
      </div>
      <div className="message-info">
        <span className="from-text">From. {name}</span>
        <span className="relation-text">{relation}</span>
        <span className="message-date">{date}</span>
      </div>
    </div>
    <p className="message-text">{text}</p>
  </div>
);

const RollingPaperSection = () => {
  return (
    <section className="rolling-paper-section">
      <div className="section-header">
        <div className="point-badge">Point. 01</div>
        <h2>누구나 손쉽게, 온라인<br />롤링 페이퍼를 만들 수 있어요</h2>
        <p>로그인 없이 자유롭게 만들어요.</p>
      </div>
      <div className="message-container">
        {messages.map((message) => (
          <MessageCard key={message.id} {...message} />
        ))}
        <div className="add-message-card">
          <span className="plus-icon">+</span>
        </div>
      </div>
    </section>
  );}
};

export default RollingPaperSection;
