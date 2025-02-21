export interface IAutocompleteOptions {
  path: string;
  keyQueryParams: IKeyQueryParamsAutocomplete[];
  idMapper: string;
  nameMapper: string;
  secondaryKeyMapper: string;
}

export interface IKeyQueryParamsAutocomplete {
  key: string;
  value: string;
  hotReplacement: boolean;
}
