import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const CartItemImage = styled.img`
  width: 30%;
`;

export const ItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  /* padding: 10px 0 10px 10px; */
`;

export const TextContainer = styled.span`
  padding: 0 10px 10px 10px;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  span {
    margin: 0 5px;
  }
  div {
    cursor: pointer;
    padding: 10px;
  }
`;

export const RemoveButtonContainer = styled.div`
  cursor: pointer;
  align-items: center;
  display: flex;
  font-size: 14px;
`;
