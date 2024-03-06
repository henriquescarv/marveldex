import React, { useCallback, useEffect, useRef, useState } from "react";
import * as Styles from "./AuthorHandler.styles";
import { useDispatch, useSelector } from "react-redux";
import authorActions from "store/modules/author/author.actions";
import { Card } from "ui/components/Card";
import useCredentials from "hooks/useCredentials/useCredentials";
import { Button } from "ui/components/Button";
import { Loading } from "ui/components/Loading";
import { Filter } from "components/Filter";

const AuthorHandler = () => {
  const { authors } = useSelector((state: any) => state.author);
  const [filterInput, setFilterInput] = useState(authors.filter);

  const listOffsetRef = useRef(0);
  const dispatch = useDispatch();
  const { publicKey, privateKey } = useCredentials();

  const displayLoadMore = !!authors.list.length && authors.totalItems > authors.list.length;
  const mountButtonLabel = authors.loading ? <Loading /> : "LOAD MORE";

  const requestCharacters = useCallback(() => {
    if (publicKey && privateKey && !authors.list.length) {
      dispatch(authorActions.author.request({ publicKey, privateKey }));
      dispatch(authorActions.author.clearList());
    }
    listOffsetRef.current = 70;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => { requestCharacters() }, [requestCharacters]);

  const handleLoadAuthors = useCallback(() => {
    if (publicKey && privateKey && !authors.loading) {
      dispatch(authorActions.author.request({ publicKey: publicKey, privateKey: privateKey, offset: listOffsetRef.current }));
      listOffsetRef.current += 70;
    };
  }, [dispatch, publicKey, privateKey, authors.loading]);
  
  const handleFilter = useCallback(() => {
    listOffsetRef.current = 0;
    dispatch(authorActions.author.clearList());
    dispatch(authorActions.author.setFilter(filterInput));
    handleLoadAuthors();
  }, [dispatch, filterInput, handleLoadAuthors]);

  const mountCard = (author: any) => {
    const imageSrc = `${author.thumbnail.path}.${author.thumbnail.extension}`;

    return (
      <Card name={author.fullName} imageSrc={imageSrc} key={author.id} url={`authors/${author.id}`} />
    );
  };

  const mountFilter = (
    <Filter
      placeholder="Author name"
      filterInput={filterInput}
      setFilterInput={(e: React.ChangeEvent<HTMLInputElement>) => setFilterInput(e.target.value)}
      searchAction={handleFilter}
      title="List of creators"
      disableAction={authors.loading}
    />
  );

  if (!authors.list.length && authors.loading) {
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
      {!authors.list.length && (
        <Styles.LoadingContainer>
          {'Nothing here :('}
        </Styles.LoadingContainer>
      )}
      {!!authors.list.length && (
        <>
          <Styles.CardsContainer>
            {authors.list.map((author: any) => mountCard(author))}
          </Styles.CardsContainer>
          {displayLoadMore && (
            <Styles.ButtonWrapper>
              <Styles.ButtonContainer>
                <Button label={mountButtonLabel} onClick={handleLoadAuthors} disabled={authors.loading} />
              </Styles.ButtonContainer>
            </Styles.ButtonWrapper>
          )}
        </>
      )}
    </Styles.Wrapper>
  );
};

export default AuthorHandler;
