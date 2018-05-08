/* @flow */
import {FailedRecord} from './../commonParameter';
import {isHttpStatusOK} from './../utils';

const url = 'https://api.gemcook.com';
const version = '/v1';

async function getFruits(current: number) {
  const response = await fetch(`${url}${version}/paging?page=${current}`, {
    method: 'GET',
  });

  const responseJson = await response.json();

  const count = {
    totalCount: Number(response.headers.get('x-total-count')),
    totalPages: Number(response.headers.get('x-total-pages')),
  };

  if (isHttpStatusOK(response.status)) {
    const response = responseJson;
    const result = Object.assign({}, response, count);
    return result;
  }
  throw new FailedRecord(responseJson.errors[0]);
}

export default getFruits;
