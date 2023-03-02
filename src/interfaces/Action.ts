export interface Action {
  type: 'login' | 'logout';
  payload: unknown;
}
