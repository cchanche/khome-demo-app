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
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = (await response.json()) as T;

    return { response, data };
  };

  post = async <T>(
    url: string,
    options?: Omit<RequestInit, 'method'>,
  ): Promise<{ response: Response; data: T }> => {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = (await response.json()) as T;

    return { response, data };
  };

  put = async <T>(
    url: string,
    options?: Omit<RequestInit, 'method'>,
  ): Promise<{ response: Response; data: T }> => {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = (await response.json()) as T;

    return { response, data };
  };

  delete = async <T>(
    url: string,
    options?: Omit<RequestInit, 'method'>,
  ): Promise<{ response: Response; data: T }> => {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = (await response.json()) as T;

    return { response, data };
  };
}

const httpClient = new HttpClient(process.env.REACT_APP_API_BASE_URL || '');

export default httpClient;
