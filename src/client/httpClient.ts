import axios, {AxiosResponse, AxiosRequestConfig} from 'axios';

import {HttpRequest} from './httpRequest';
import {HttpResponse} from './httpResponse';

class HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    let axiosConfig: AxiosRequestConfig = Object.assign(data);

    try {
      axiosResponse = await axios.request(axiosConfig);
    } catch (error: any) {
      axiosResponse = error.response;
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}

export {HttpClient};
