export type RelatedListProps = {
  title: string,
  content: any[],
};

export type DetailsPageProps = {
  data: any,
  type: string,
  relatedLists: RelatedListProps[],
  loading?: boolean,
};
