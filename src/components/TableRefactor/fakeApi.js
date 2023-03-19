import { rowListSort } from './data';

export function fetchProfileData() {
  let rowsPromise = fetchRows();
  return {
    rows: wrapPromise(rowsPromise),
  };
}

// Suspense integrations like Relay implement
// a contract like this to integrate with React.
// Real implementations can be significantly more complex.
// Don't copy-paste this into your project!
function wrapPromise(promise) {
  let status = 'pending';
  let result;
  let suspender = promise.then(
    (r) => {
      status = 'success';
      result = r;
    },
    (e) => {
      status = 'error';
      result = e;
    },
  );
  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    },
  };
}

function fetchRows() {
  console.log('fetch rows...');
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('fetched rows');
      resolve(rowListSort);
    }, 1000);
  });
}
