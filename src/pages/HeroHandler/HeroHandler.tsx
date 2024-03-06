import React, { useCallback, useEffect, useRef, useState } from "react";
import * as Styles from "./HeroHandler.styles";
import { useDispatch, useSelector } from "react-redux";
import heroActions from "store/modules/hero/hero.actions";
import { Card } from "ui/components/Card";
import useCredentials from "hooks/useCredentials/useCredentials";
import { Button } from "ui/components/Button";
import { Loading } from "ui/components/Loading";
import { Filter } from "components/Filter";

const HeroHandler = () => {
  const { characters } = useSelector((state: any) => state.hero);
  const [filterInput, setFilterInput] = useState(characters.filter);
  
  const listOffsetRef = useRef(0);
  const dispatch = useDispatch();
  const { publicKey, privateKey } = useCredentials();

  const displayLoadMore = !!characters.list.length && characters.totalItems > characters.list.length;
  const mountButtonLoadMoreLabel = characters.loading ? <Loading /> : "LOAD MORE";

  const requestCharacters = useCallback(() => {
    if (publicKey && privateKey && !characters.loading && !characters.list.length) {
      dispatch(heroActions.characters.request({ publicKey: publicKey, privateKey: privateKey }));
      dispatch(heroActions.characters.clearList());
    };
    listOffsetRef.current = 70;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => { requestCharacters() }, [requestCharacters]);

  const handleLoadCharacters = useCallback(() => {
    if (publicKey && privateKey && !characters.loading) {
      dispatch(heroActions.characters.request({ publicKey: publicKey, privateKey: privateKey, offset: listOffsetRef.current }));
      listOffsetRef.current += 70;
    };
  }, [dispatch, publicKey, privateKey, characters.loading]);

  const handleFilter = useCallback(() => {
    listOffsetRef.current = 0;
    dispatch(heroActions.characters.clearList());
    dispatch(heroActions.characters.setFilter(filterInput));
    handleLoadCharacters();
  }, [dispatch, filterInput, handleLoadCharacters]);

  const mountCard = (character: any) => {
    const imageSrc = `${character.thumbnail.path}.${character.thumbnail.extension}`;

    if (imageSrc.includes('image_not_available')) {
      return;
    }

    return (
      <Card name={character.name} imageSrc={imageSrc} key={character.id} url={`characters/${character.id}`} />
    );
  };

  const mountFilter = (
    <Filter
      placeholder="Character name"
      filterInput={filterInput}
      setFilterInput={(e: React.ChangeEvent<HTMLInputElement>) => setFilterInput(e.target.value)}
      searchAction={handleFilter}
      title="List of characters"
      disableAction={characters.loading}
    />
  );

  if (characters.loading && !characters.list.length) {
    return (
      <Styles.Wrapper>
        {mountFilter}
        <Styles.LoadingContainer>
          <Loading size={24} />
        </Styles.LoadingContainer>
      </Styles.Wrapper>
    );
  };

  return (
    <Styles.Wrapper>
      {mountFilter}
      {!characters.list.length && (
        <Styles.LoadingContainer>
          {'Nothing here :('}
        </Styles.LoadingContainer>
      )}
      {!!characters.list.length && (
        <>
          <Styles.CardsContainer>
            {characters.list.map((character: any) => mountCard(character))}
          </Styles.CardsContainer>
          {displayLoadMore && (
            <Styles.ButtonWrapper>
              <Styles.ButtonContainer>
                <Button label={mountButtonLoadMoreLabel} onClick={handleLoadCharacters} disabled={characters.loading} />
              </Styles.ButtonContainer>
            </Styles.ButtonWrapper>
          )}
        </>
      )}
    </Styles.Wrapper>
  );
};

export default HeroHandler;
