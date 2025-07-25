import React from "react";
import styled from "styled-components";

const Card = ({ children }) => {
  return (
    <StyledWrapper>
      <div className="card">{children}</div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  height: 200%;
  .card {
    box-sizing: border-box;
    width: 100%;
    min-width: 220px;
    max-width: 350px;
    min-height: 220px;
    height: 320px;
    /*height: 254px;*/
    background: rgba(255, 255, 255, 0.58);
    border: 1px solid white;
    box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(6px);
    border-radius: 17px;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    user-select: none;
    font-weight: bolder;
    color: black;
    padding: 1rem;
    border: 1px solid #003800;
  }

  .card:hover {
    transform: scale(1.05);
  }
`;

export default Card;
