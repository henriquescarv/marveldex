import React, { useCallback, useEffect } from "react";
import * as Styles from "./HeroHandler.styles";
import { useDispatch, useSelector } from "react-redux";
import commonActions from "store/modules/common/common.actions";


const HeroHandler = () => {
  const { characters } = useSelector((state: any) => state.common)
  const dispatch = useDispatch();

  const requestCharacters = useCallback(() => {
    dispatch(commonActions.characters.request());
  }, [dispatch]);

  useEffect(() => {requestCharacters()}, [requestCharacters])

  const mountCard = (character: any) => {
    const imageSrc = `${character.thumbnail.path}.${character.thumbnail.extension}`

    return (
      <Styles.Card>
        <Styles.CardImage src={imageSrc} />
      </Styles.Card>
    )
  }

  return (
    <Styles.Wrapper>
      {characters.list.map((character: any) => mountCard(character))}
    </Styles.Wrapper>
  );
};

export default HeroHandler;
