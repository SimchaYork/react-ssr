import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;

  return <h1>Oops! That page could not be found.</h1>;
};

export default {
  component: NotFoundPage,
};
