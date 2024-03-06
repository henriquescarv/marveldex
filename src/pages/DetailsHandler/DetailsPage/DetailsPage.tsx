import React from "react";
import * as Styles from "./DetailsPage.styles";
import { Card } from "ui/components/Card";
import { DetailsPageProps, RelatedListProps } from "./DetailsPage.types";
import { Loading } from "ui/components/Loading";

const DetailsPage = ({ data, relatedLists, loading = false, type }: DetailsPageProps) => {
  const mountCard = (item: any) => {
    const imageSrc = `${item.thumbnail.path}.${item.thumbnail.extension}`;
    const urlBase = type === 'comics' ? 'authors' : 'comics';

    return (
      <Card name={item.name || item.title || item.fullName} imageSrc={imageSrc} key={item.id} url={`../${urlBase}/${item.id}`} />
    );
  };

  if (loading) {
    return (
      <Styles.Wrapper>
        <Styles.LoadingContainer>
          <Loading size={32} />
        </Styles.LoadingContainer>
      </Styles.Wrapper>
    );
  };

  return (
    <Styles.Wrapper>
      <Styles.HeadContainer>
        <Styles.ImageContainer>
          <Styles.Image src={`${data?.thumbnail?.path || ''}.${data?.thumbnail?.extension || ''}`} />
        </Styles.ImageContainer>
        <Styles.TextsContainer>
          <Styles.Title>{data?.name || data?.title || data?.fullName}</Styles.Title>
          <Styles.Description>{data?.description}</Styles.Description>
        </Styles.TextsContainer>
      </Styles.HeadContainer>
      {relatedLists.map((relatedList: RelatedListProps) => (
        <Styles.RelationedLists key={relatedList.title}>
          <Styles.CardTitleContainer>
            {!!relatedList.content.length ? relatedList.title : 'NO RELATED LISTS :('}
          </Styles.CardTitleContainer>
          {!!relatedList.content.length && (
            <Styles.CardsContainer>
              {relatedList.content.map((comic: any) => mountCard(comic))}
            </Styles.CardsContainer>
          )}
        </Styles.RelationedLists>
      ))}
    </Styles.Wrapper>
  );
};

export default DetailsPage;
