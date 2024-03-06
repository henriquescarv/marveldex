import React from "react";
import { CardProps } from "./Card.types";
import * as Styles from "./Card.styles";

const Card = ({ name = '', imageSrc = '' }: CardProps) => {
  return (
    <Styles.Card>
      <Styles.CardImage src={imageSrc} />
      <Styles.CardContent>
        <Styles.Name title={name}>{name}</Styles.Name>
      </Styles.CardContent>
    </Styles.Card>
  )
};

export default Card;
