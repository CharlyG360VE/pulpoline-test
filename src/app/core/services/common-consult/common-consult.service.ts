import { eHttpMethod } from "@/enums/http-method.enum";
import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CommonConsultService {

  private readonly _httpClient = inject(HttpClient);

  async callEndpoint<T>(method: eHttpMethod, endpointApi: string, payload?: any, params?: HttpParams) {
    let generalResponse!: T;

    try {
      switch (method) {
        case eHttpMethod.GET:
          generalResponse = await lastValueFrom(this._httpClient.get<T>(endpointApi, { params }))
          break;
        case eHttpMethod.POST:
          generalResponse = await lastValueFrom(this._httpClient.post<T>(endpointApi, payload, { params }))
          break;
        case eHttpMethod.PUT:
          generalResponse = await lastValueFrom(this._httpClient.post<T>(endpointApi, payload, { params }))
          break;
        case eHttpMethod.DELETE:
          generalResponse = await lastValueFrom(this._httpClient.post<T>(endpointApi, {}, { params }))
          break;
        default:
          console.warn('No es una opcion valida')
          break;
      }
    } catch (error) {
      console.error(error);
    }

    return generalResponse ?? null
  }

}
