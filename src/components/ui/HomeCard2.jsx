import React from "react";
import styled from "styled-components";

const Card2 = ({ image, title, date, tag }) => {
  return (
    <StyledWrapper>
      <div className="news-card">
        {/* Left: Thumbnail */}
        <div className="thumbnail">
          {tag && <span className="tag">{tag}</span>}
          {image ? (
            <img src={image} alt={title} />
          ) : (
            <div className="placeholder-img" />
          )}
        </div>

        {/* Right: Content */}
        <div className="content">
          <h3 className="title">{title}</h3>
          {date && (
            <p className="date">
              <span className="clock-icon">🕐</span> {date}
            </p>
          )}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .news-card {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    background: #ffffff;
    border: 2px solid #008000;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 4px 6px 20px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 100%;
    max-width: 500px;
    min-height: 250px;
  }

  .news-card:hover {
    transform: scale(1.03);
    box-shadow: 6px 10px 28px rgba(0, 0, 0, 0.15);
  }

  /* Left thumbnail */
  .thumbnail {
    position: relative;
    width: 220px;
    min-width: 140px;
    background: #c8e6c9;
    overflow: hidden;
    border-radius: 14px 0 0 14px;
  }

  .thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .placeholder-img {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #a5d6a7, #388e3c);
  }

  /* Right content */
  .content {
    flex: 1;
    padding: 16px 16px 14px 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }

  .title {
    font-size: 1rem;
    text-align: left;
    font-weight: 800;
    color: #1a1a1a;
    font-family: 'Poppins', sans-serif;
    line-height: 1.4;
    margin: 0;
  }

  .date {
    font-size: 0.8rem;
    color: #757575;
    font-family: 'Poppins', sans-serif;
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 0;
  }

  .clock-icon {
    font-size: 0.75rem;
  }
`;

export default Card2;