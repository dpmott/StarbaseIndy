'use strict';

exports.lambdaHandler = async () => {
  const now = new Date().toLocaleString();
  return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html; charset=UTF-8' },
      body: `Hello, the time is ${now}`,
    };
};
