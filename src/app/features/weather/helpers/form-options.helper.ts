import { environment } from "@/environments/environment";
import { IAutocompleteOptions } from "@shared/components-forms/interfaces/auto-complete.interface";
import { WeatherApiKey } from "./api-key.helper";

export const FILTER_AUTOCOMPLETE_OPTIONS: IAutocompleteOptions = {
  path: `${ environment.apiUrl }/search.json`,
  idMapper: 'id',
  nameMapper: 'name',
  secondaryKeyMapper: 'country',
  keyQueryParams: [
    {
      key: 'key',
      value: WeatherApiKey.apiKey,
      hotReplacement: false
    },
    {
      key: 'q',
      value: '',
      hotReplacement: true
    }
  ]
}