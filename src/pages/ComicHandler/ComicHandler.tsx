import React, { useCallback, useEffect, useRef, useState } from "react";
import * as Styles from "./ComicHandler.styles";
import { useDispatch, useSelector } from "react-redux";
import comicActions from "store/modules/comic/comic.actions";
import { Card } from "ui/components/Card";
import useCredentials from "hooks/useCredentials/useCredentials";
import { Button } from "ui/components/Button";
import { Loading } from "ui/components/Loading";
import { Filter } from "components/Filter";

const ComicHandler = () => {
  const { comics } = useSelector((state: any) => state.comic);

  const [filterInput, setFilterInput] = useState(comics.filter);

  const listOffsetRef = useRef(0);
  const { publicKey, privateKey } = useCredentials();
  const dispatch = useDispatch();

  const displayLoadMore = !!comics.list.length && comics.totalItems > comics.list.length;
  const mountButtonLabel = comics.loading ? <Loading /> : "LOAD MORE";

  const requestCharacters = useCallback(() => {
    if (publicKey && privateKey && !comics.loading && !comics.list.length) {
      dispatch(comicActions.comics.request({ publicKey, privateKey }));
      dispatch(comicActions.comics.clearList());
    };
    listOffsetRef.current = 70;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {requestCharacters()}, [requestCharacters]);

  const handleLoadComics = useCallback(() => {
    if (publicKey && privateKey && !comics.loading) {
      dispatch(comicActions.comics.request({ publicKey: publicKey, privateKey: privateKey, offset: listOffsetRef.current }));
      listOffsetRef.current += 70;
    };
  }, [dispatch, publicKey, privateKey, comics.loading]);

  const handleFilter = useCallback(() => {
    listOffsetRef.current = 0;
    dispatch(comicActions.comics.clearList());
    dispatch(comicActions.comics.setFilter(filterInput));
    handleLoadComics();
  }, [dispatch, filterInput, handleLoadComics]);

  const mountCard = (comic: any) => {
    const imageSrc = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;

    if (imageSrc.includes('image_not_available')) {
      return;
    }

    return (
      <Card name={comic.title} imageSrc={imageSrc} key={comic.id} />
    );
  };

  const mountFilter = (
    <Filter
      placeholder="Comic name"
      filterInput={filterInput}
      setFilterInput={(e: React.ChangeEvent<HTMLInputElement>) => setFilterInput(e.target.value)}
      searchAction={handleFilter}
      title="List of comics"
      disableAction={comics.loading}
    />
  );

  if (!comics.list.length && comics.loading) {
    return (
      <Styles.Wrapper>
        {mountFilter}
        <Styles.LoadingContainer>
          <Loading size={24} />
        </Styles.LoadingContainer>
      </Styles.Wrapper>
    );
  }

  return (
    <Styles.Wrapper>
      {mountFilter}
      {!comics.list.length && (
        <Styles.LoadingContainer>
          {'Nothing here :('}
        </Styles.LoadingContainer>
      )}
      {!!comics.list.length && (
        <>
          <Styles.CardsContainer>
            {comics.list.map((comic: any) => mountCard(comic))}
          </Styles.CardsContainer>
          {displayLoadMore && (
            <Styles.ButtonWrapper>
              <Styles.ButtonContainer>
                <Button label={mountButtonLabel} onClick={handleLoadComics} disabled={comics.loading} />
              </Styles.ButtonContainer>
            </Styles.ButtonWrapper>
          )}
        </>
      )}
    </Styles.Wrapper>
  );
};

export default ComicHandler;
