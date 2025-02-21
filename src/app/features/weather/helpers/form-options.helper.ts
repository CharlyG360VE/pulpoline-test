import { environment } from "@/environments/environment";
import { IAutocompleteOptions } from "@shared/components-forms/interfaces/auto-complete.interface";

export const FILTER_AUTOCOMPLETE_OPTIONS: IAutocompleteOptions = {
  path: `${ environment.apiUrl }/search.json`,
  idMapper: 'id',
  nameMapper: 'name',
  secondaryKeyMapper: 'country',
  keyQueryParams: [
    {
      key: 'key',
      value: environment.apiKey,
      hotReplacement: false
    },
    {
      key: 'q',
      value: '',
      hotReplacement: true
    }
  ]
}