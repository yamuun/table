/* @flow */
export default function makeLocalActiveData(
  data: Array<*>,
  current: number,
  updateCurrent: number => void,
): Array<*> {
  let startIndex;
  let endIndex;
  let nextCurrent = current;

  if (String(data.length).slice(-1) === '0' && nextCurrent !== 1) {
    nextCurrent -= 1;
    updateCurrent(nextCurrent);
  }

  if (nextCurrent === 1) {
    startIndex = 0;
    endIndex = 10;
  } else {
    startIndex = Number(String(nextCurrent - 1) + '0');
    endIndex = Number(String(nextCurrent) + '0');
  }

  return data.slice(startIndex, endIndex);
}
