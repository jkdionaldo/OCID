import React, { useState } from "react";
import styled from "styled-components";

const Faq = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledWrapper>
      <div className={`faq-card ${isOpen ? "open" : ""}`}>

        {/* ── Question Row (always green) ── */}
        <div
          className="question-row"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="question-text">{question}</span>
          <span className={`chevron ${isOpen ? "rotated" : ""}`}>
            {isOpen ? (
              /* Up caret when open */
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              /* Down caret when closed */
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </span>
        </div>

        {/* ── Answer Panel (yellow/gold, slides open) ── */}
        <div className={`answer-panel ${isOpen ? "expanded" : ""}`}>
          <div className="answer-content">
            <p>{answer}</p>
          </div>
        </div>

      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;

  .faq-card {
    box-sizing: border-box;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
    transition: box-shadow 0.3s ease;
  }

  .faq-card:hover {
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.18);
  }

  /* ── Question row — always dark green ── */
  .question-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    padding: 16px 20px;
    gap: 12px;
    background: #1a5c1a;
    cursor: pointer;
    user-select: none;
    transition: background 0.25s ease;
  }

  .faq-card.open .question-row {
    background: #009900;
    
  }

  .question-row:hover {
    background: #009900;
   
  }

  .question-text {
    font-family: 'Poppins', sans-serif;
    font-size: 0.95rem;
    font-weight: 300;
    line-height: 1.4;
    color: #ffffff;
    flex: 1;
  }

  /* ── Chevron icon ── */
  .chevron {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    color: #ffffff;
    transition: transform 0.35s ease;
  }

  /* ── Answer panel — yellow/gold, animates open ── */
  .answer-panel {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.45s ease;
    background: #f9dc07;
  }

  .answer-panel.expanded {
    max-height: 500px;
  }

  .answer-content {
    padding: 16px 20px 20px 20px;
  }

  .answer-content p {
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    text-align: left;
    line-height: 1.75;
    color: #1a1a1a;
    margin: 0;
  }

  /* ── Mobile adjustments ── */
  @media (max-width: 640px) {
    .question-text {
      font-size: 0.85rem;
    }

    .answer-content p {
      font-size: 0.82rem;
    }

    .question-row {
      padding: 14px 16px;
    }

    .answer-content {
      padding: 14px 16px 18px 16px;
    }
      
  }
`;

export default Faq;