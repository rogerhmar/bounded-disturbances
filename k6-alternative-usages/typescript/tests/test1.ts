import { check } from 'k6';
import { Options } from 'k6/options';
import http from 'k6/http';

export let options:Options = {
  vus: 1,
  iterations: 1
};

export default () => {
  const res = http.get('https://test-api.k6.io');
  check(res, {
    'status is 200': () => res.status === 200,
  });
};