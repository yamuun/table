//@flow
export const DateFormat = 'YYYY. MM. DD (ddd) HH:mm';

/** Httpステータスコードが2xxか判定します。 */
export const isHttpStatusOK = (status: number): boolean => {
  return status >= 200 && status < 300;
};
