export type FilterProps = {
  placeholder: string,
  filterInput: string,
  setFilterInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
  searchAction: () => void,
  title?: string,
  disableAction?: boolean,
};
