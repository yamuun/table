/* @flow */
import {Record} from 'immutable';

export const FailedRecord = Record({
  message: '',
  code: '',
  type: '',
  detail: [],
});
