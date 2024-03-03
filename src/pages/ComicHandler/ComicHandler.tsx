import React, { useCallback, useEffect } from "react";
import * as Styles from "./ComicHandler.styles";
import { useDispatch, useSelector } from "react-redux";
import comicActions from "store/modules/comic/comic.actions";
import { Card } from "ui/components/Card";


const ComicHandler = () => {
  const { comics } = useSelector((state: any) => state.comic)
  const dispatch = useDispatch();

  const requestCharacters = useCallback(() => {
    dispatch(comicActions.comics.request());
  }, [dispatch]);

  useEffect(() => {requestCharacters()}, [requestCharacters])

  const mountCard = (comic: any) => {
    const imageSrc = `${comic.thumbnail.path}.${comic.thumbnail.extension}`

    if (imageSrc.includes('image_not_available')) {
      return;
    }

    return (
      <Card name={comic.title} imageSrc={imageSrc} testId={comic.id.toString()} />
    )
  };

  return (
    <Styles.Wrapper>
      {comics.list.map((comic: any) => mountCard(comic))}
    </Styles.Wrapper>
  );
};

export default ComicHandler;
