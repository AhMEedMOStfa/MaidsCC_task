export interface User {
  id: number;
  avatar: string;
  last_name: string;
  first_name: string;
  email: string;
}
export interface PaginateResponse<T> {
  data: T;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  support: {
    url: string;
    text: string;
  };
}
