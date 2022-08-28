import { camelToSnake, snakeToCamel } from "./apiUtils";
import HttpError from "./HttpError";

export interface RequestOptions {
  skipAuth?: boolean;
  params?: {[key: string]: any}
}

export const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:8000';

class Api {
  
  private token: string = '';

  constructor(onSuccess?: {(msg: string): void}, onError?: {(msg: string): void}) {
  }

  public setToken(token: string): void {
    this.token = token;
  }

  private headers = (): HeadersInit => {
    return {
      'Accept': 'application/json, text/plain',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }

  private async handleResponse(res: Response): Promise<any> {
    const isOk = res.ok;
    return res.json().then((r: any) => {
      console.log(r);
      if (isOk) {
        return snakeToCamel(r);
      }
      console.log(r.message || r.error);
      throw new HttpError(res.status, r.message || r.error);
    })
  }

  public async get<T=any>(path: string, options?: RequestOptions): Promise<T> {
    let url = path;
    if (options && options.params) {
      const queryParams = new URLSearchParams(options.params);
      url = url + '?' + queryParams.toString();
    }
    return this.baseRequest(url, 'GET', undefined, options);
  }

  public async post<T=any>(path: string, body: any, options?: RequestOptions): Promise<any> {
    return this.baseRequest(path, 'POST', body, options);
  }

  public async patch<T=any>(path: string, body: any, options?: RequestOptions): Promise<any> {
    return this.baseRequest(path, 'PATCH', body, options);
  }

  public async put<T=any>(path: string, body: any, options?: RequestOptions): Promise<any> {
    return this.baseRequest(path, 'PUT', body, options);
  }

  public async delete(path: string, options?: RequestOptions): Promise<any> {
    return this.baseRequest(path, 'DELETE', undefined, options);
  }

  private async baseRequest(path: string, method: string, body?: any, options?: RequestOptions): Promise<any> {
    return fetch(`${BASE_URL}${path}`, {
      method,
      body: body ? JSON.stringify(camelToSnake(body)): undefined,
      headers: this.headers(),
    }).then(res => {
      return this.handleResponse(res);
    });
  }

  public generatePath(path: string): string{
    return `${BASE_URL}${path}`;
  }
}

export default new Api();