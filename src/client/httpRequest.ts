export interface HttpRequest {
  url: string;
  method: 'POST' | 'GET';
  data?: any;
  headers?: any;
  params?: any;
}
