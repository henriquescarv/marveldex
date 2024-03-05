import React from "react";
import * as Styles from "./Fitler.styles";
import { Input } from "ui/components/Input";
import { FilterProps } from "./Filter.types";
import { Button } from "ui/components/Button";

const Filter = ({ placeholder = 'Name', searchAction, filterInput, setFilterInput, disableAction, title }: FilterProps) => {
  return (
    <Styles.Wrapper>
      <Styles.TitleWrapper>
        <Styles.Subtitle>Wellcome to MarvelDex</Styles.Subtitle>
        <Styles.Title>{title}</Styles.Title>
      </Styles.TitleWrapper>
      <Styles.RightContainer>
        <Input
          placeholder={placeholder}
          onChange={setFilterInput}
          value={filterInput}
        />
        <Button label="Search" onClick={searchAction} normalWidth disabled={disableAction} />
      </Styles.RightContainer>
    </Styles.Wrapper>
  );
};

export default Filter;
