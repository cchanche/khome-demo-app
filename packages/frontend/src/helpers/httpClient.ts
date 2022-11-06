class HttpClient {
  readonly baseUrl: string;

  constructor(baseURL: string) {
    this.baseUrl = baseURL;
  }

  get = async <T>(
    url: string,
    options?: Omit<RequestInit, 'method'>,
  ): Promise<{ response: Response; data: T }> => {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: 'GET',
      ...options,
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const parsedResponse = (await response.json()) as { data: T };

    return { response, data: parsedResponse.data };
  };

  post = async <T>(
    url: string,
    options?: Omit<RequestInit, 'method'>,
  ): Promise<{ response: Response; data: T }> => {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: 'POST',
      ...options,
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const parsedResponse = (await response.json()) as { data: T };

    return { response, data: parsedResponse.data };
  };

  put = async <T>(
    url: string,
    options?: Omit<RequestInit, 'method'>,
  ): Promise<{ response: Response; data: T }> => {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: 'PUT',
      ...options,
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const parsedResponse = (await response.json()) as { data: T };

    return { response, data: parsedResponse.data };
  };

  delete = async <T>(
    url: string,
    options?: Omit<RequestInit, 'method'>,
  ): Promise<{ response: Response; data: T }> => {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: 'DELETE',
      ...options,
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const parsedResponse = (await response.json()) as { data: T };

    return { response, data: parsedResponse.data };
  };
}

const httpClient = new HttpClient(process.env.REACT_APP_API_BASE_URL || '');

export default httpClient;
