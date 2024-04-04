'use server';

type FetchError = null | {
  errorMessage: string;
  errorObject: Error;
};

export type FetchedData<T> = {
  data?: T;
  controller?: AbortController;
  error: FetchError | unknown;
};

/**
 * Fetches data from a given resource
 * @template U
 * @param {string} resource - The URL to fetch data from
 * @param {RequestInit} [options={}] - Options for the fetch request
 * @param {number} [timeout=5000] - Timeout for the fetch request
 * @returns {Promise<FetchedData<U>>} - The fetched data
 */
export default async function fetchData<U>(
  resource: string,
  options: RequestInit = {},
  timeout = 5000,
): Promise<FetchedData<U>> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(resource, {
      ...options,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) throw new Error('Error fetching data');

    const data: U = await response.json();

    return { data, controller, error: null };
  } catch (err) {
    if (err instanceof Error) {
      const error = { errorMessage: err.message, errorObject: err };
      return { error };
    }

    const error = {
      errorMessage: 'Unknown error in fetchData',
      errorObject: err as unknown,
    };

    return { error };
  }
}
