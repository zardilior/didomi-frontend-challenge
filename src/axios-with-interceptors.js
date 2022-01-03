import axios from 'axios';
import INITIAL_MOCK_DATA from './initial-mock-data';
import * as MockXMLHttpRequest from 'mock-xmlhttprequest';

const consents = INITIAL_MOCK_DATA;


const server = MockXMLHttpRequest.newServer({
  get: [/consents/, {
    // status: 200 is the default
    headers: { 'Content-Type': 'application/json' },
    body: '"CONSENTS"',
  }],
  post: [/consents/, {
    // status: 200 is the default
    status: 204,
    headers: { 'Content-Type': 'application/json' },
    body: '"GIVE_CONSENT"',
  }],
}).install();

axios.interceptors.response.use(
  async function (response) {
    const { config } = response;
    const { url, method, data } = config;
    console.log({ config, response });

    let result = interceptGetConsents(url, method);
    result = result || interceptPostConsent(url, method, JSON.parse(data));
    response.data = result || response.data;
    console.log({ result });

    await new Promise( resolve => setTimeout(resolve,500));

    return response;
  },
  function (error) {
    console.error({ error });
  }
);

function interceptGetConsents(url, method) {
  if (method !== 'get') return;
  const getConsentsUrlRegex = /\/consents\?page=(\d+)/; 
  const [_, page] = url.match(getConsentsUrlRegex) || [];
  if (page === undefined) return;
  const result =  {
    data: consents.slice(2*page,2*page+2),
    total: consents.length,
  };
  console.log({ result });
  return result;
}

let latestId = 3;
function interceptPostConsent(url, method, data) {
  if (method!== 'post') return;
  console.log('intercepted post', { data })
  const postConsentUrlRegex = /\/consent/;   
  if (!url.match(postConsentUrlRegex)) return;
  latestId += 1;
  data.id = latestId;
  consents.push(data);
  return 'ok';
}

export default axios;
