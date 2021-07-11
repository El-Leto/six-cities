import React from 'react';
import { css } from '@emotion/react';
import DotLoader from 'react-spinners/DotLoader';

const override = css`
  display: block;
  margin: 200px auto;
`;

function LoadingScreen() {
  return (
    <DotLoader color={'#696969'} css={override} size={200} />
  );
}

export default LoadingScreen;
