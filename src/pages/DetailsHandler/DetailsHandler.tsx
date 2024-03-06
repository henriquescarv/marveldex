import { useLocation, useParams } from "react-router-dom";
import { DetailsPage } from "./DetailsPage";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import heroActions from "store/modules/hero/hero.actions";
import useCredentials from "hooks/useCredentials/useCredentials";
import comicActions from "store/modules/comic/comic.actions";
import authorActions from "store/modules/author/author.actions";

const DetailsHandler = () => {
  const { itemId } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const { publicKey, privateKey } = useCredentials();
  const { data: heroData, comics: heroComicsList, loading: heroLoading } = useSelector((state: any) => state.hero.details);
  const { data: comicData, creators: comicCreatorsList, loading: comicLoading } = useSelector((state: any) => state.comic.details);
  const { data: authorData, comics: authorComicsList, loading: authorLoading } = useSelector((state: any) => state.author.details);

  const getItemType = () => {
    if (location.pathname.includes('characters')) {
      return 'characters';
    }
    if (location.pathname.includes('comics')) {
      return 'comics';
    }
    return 'authors';
  };

  const getItemDetails = useCallback(() => {
    getItemType() === 'characters' && dispatch(heroActions.characterDetails.request({ publicKey, privateKey, characterId: itemId }));
    getItemType() === 'comics' && dispatch(comicActions.comicDetails.request({ publicKey, privateKey, comicId: itemId }));
    getItemType() === 'authors' && dispatch(authorActions.authorDetails.request({ publicKey, privateKey, authorId: itemId }));
  }, []);

  useEffect(() => {
    getItemDetails();
  }, [getItemDetails]);

  const getDetailsPageProps = () => {
    const detailsRules = {
      'characters': {
        data: heroData,
        loading: heroLoading,
        relatedLists: [
          {
            title: 'RELATED COMICS',
            content: heroComicsList,
          },
        ],
      },
      'comics': {
        data: comicData,
        loading: comicLoading,
        relatedLists: [
          {
            title: 'RELATED CREATORS',
            content: comicCreatorsList,
          },
        ],
      },
      'authors': {
        data: authorData,
        loading: authorLoading,
        relatedLists: [
          {
            title: 'RELATED COMICS',
            content: authorComicsList,
          },
        ],
      },
    };

    return { ...detailsRules[getItemType()], type: getItemType() };
  };

  return (
    <DetailsPage {...getDetailsPageProps()} />
  );
};

export default DetailsHandler;
