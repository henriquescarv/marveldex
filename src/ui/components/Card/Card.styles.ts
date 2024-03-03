import styled, { css } from "styled-components";

export const Card = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.highLight};
    border-radius: 16px;
    width: 180px;
    height: 240px;
  `};
`;

export const CardImage = styled.img`
  border-radius: 16px 16px 0 0;
  width: 100%;
  height: 70%;
  display: block;
  object-fit: cover;
  user-select: none;
  -webkit-user-drag: none;
`;

export const CardContent = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.highLight};
    padding: 8px;
  `};
`;

export const Name = styled.h4`
  font-size: 16px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;