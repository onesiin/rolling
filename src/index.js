import React from 'react';
import './App.css';
import RollingPaperSection from './RollingPaperSection';
import ReactionSection from './ReactionSection';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="Rolling Logo" />
          <span>Rolling</span>
        </div>
        <button className="create-button">롤링 페이퍼 만들기</button>
      </header>
      <main>
        <RollingPaperSection />
        <hr className="divider" />
        <ReactionSection />
      </main>
      <footer className="footer">
        <button className="purchase-button">구경해보기</button>
      </footer>
    </div>
  );
}

export default App;
