import React, { useCallback, useEffect } from "react";
import * as Styles from "./HeroHandler.styles";
import { useDispatch, useSelector } from "react-redux";
import heroActions from "store/modules/hero/hero.actions";
import { Card } from "ui/components/Card";


const HeroHandler = () => {
  const { characters } = useSelector((state: any) => state.hero)
  const dispatch = useDispatch();

  const requestCharacters = useCallback(() => {
    dispatch(heroActions.characters.request());
  }, [dispatch]);

  useEffect(() => {
    requestCharacters()
  }, [requestCharacters])

  const mountCard = (character: any) => {
    const imageSrc = `${character.thumbnail.path}.${character.thumbnail.extension}`

    if (imageSrc.includes('image_not_available')) {
      return;
    }

    return (
      <Card name={character.name} imageSrc={imageSrc} testId={character.id.toString()} />
    )
  };

  return (
    <Styles.Wrapper>
      {characters.list.map((character: any) => mountCard(character))}
    </Styles.Wrapper>
  );
};

export default HeroHandler;
