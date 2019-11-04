import axios from "axios";
import { AxiosInstance } from "axios";
import { ErrorHandler } from "@angular/core";
import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';

export interface Params {
  [key: string]: any;
}

export interface GetOptions {
  url: string;
  params?: Params;
}

export interface ErrorResponse {
  id: string;
  code: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  private axiosClient: AxiosInstance;
  private errorHandler: ErrorHandler;

  constructor(errorHandler: ErrorHandler) {

    this.errorHandler = errorHandler;

    this.axiosClient = axios.create({
      timeout: 5000
    });
  }

  public async get<T>(options: GetOptions): Promise<T> {
    try {
     const token = await firebase.auth().currentUser.getIdToken();
      var axiosResponse = await this.axiosClient.request<T>({
        method: "get",
        url: options.url,
        params: options.params,
        headers: {
          "authorization": `Bearer ${token}`
        }
      });
      return (axiosResponse.data);
    } catch (error) {
      return (Promise.reject(this.normalizeError(error)));
    }
  }

  private normalizeError( error: any ) : ErrorResponse {
    this.errorHandler.handleError( error );
    return({
        id: "-1",
        code: "UnknownError",
        message: "An unexpected error occurred."
    });

}


}
