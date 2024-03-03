import React, { useCallback, useEffect } from "react";
import * as Styles from "./AuthorHandler.styles";
import { useDispatch, useSelector } from "react-redux";
import authorActions from "store/modules/author/author.actions";
import { Card } from "ui/components/Card";


const AuthorHandler = () => {
  const { authors } = useSelector((state: any) => state.author)
  const dispatch = useDispatch();

  const requestCharacters = useCallback(() => {
    dispatch(authorActions.author.request());
  }, [dispatch]);

  useEffect(() => {requestCharacters()}, [requestCharacters])

  const mountCard = (author: any) => {
    const imageSrc = `${author.thumbnail.path}.${author.thumbnail.extension}`

    return (
      <Card name={author.fullName} imageSrc={imageSrc} testId={author.id.toString()} />
    )
  };

  return (
    <Styles.Wrapper>
      {authors.list.map((author: any) => mountCard(author))}
    </Styles.Wrapper>
  );
};

export default AuthorHandler;
