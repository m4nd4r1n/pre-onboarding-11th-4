import { API } from '@/constants/api';
import { CACHE } from '@/constants/cache';
import type { SuggestionList } from '@/types/suggestion';

export class ApiCache {
  static async getSuggestionByKeyword(keyword: string) {
    const url = `${API.BASE_URL}/sick?q=${encodeURIComponent(keyword)}`;
    const cache = await window.caches.open(CACHE.STORAGE_KEY.API_CACHE);

    return this.getResponse<SuggestionList>(url, cache);
  }

  private static async getResponse<T>(url: string, cache: Cache) {
    await this.cleanExpiredCache(cache);
    const response = await cache.match(url);
    if (!response) return this.fetchResponse<T>(url, cache);
    return response.json() as T;
  }

  private static async cleanExpiredCache(cache: Cache) {
    const keys = await cache.keys();
    keys
      .filter((key) => {
        const fetchDate = key.headers.get(API.HEADER.FETCH_DATE);
        return fetchDate && this.isExpired(fetchDate);
      })
      .forEach((key) => cache.delete(key));
  }

  private static isExpired(fetchDate: string) {
    const timeDiff = Date.now() - new Date(fetchDate).getTime();
    return timeDiff > CACHE.EXPIRE_TIME;
  }

  private static async fetchResponse<T>(url: string, cache: Cache) {
    console.log('calling api');

    const request = new Request(url, {
      headers: {
        [API.HEADER.FETCH_DATE]: new Date().toISOString(),
      },
    });
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response.json() as T;
  }
}
