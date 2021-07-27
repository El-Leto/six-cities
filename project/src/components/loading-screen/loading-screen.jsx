import React from 'react';
import { css } from '@emotion/react';
import DotLoader from 'react-spinners/DotLoader';
import Toast from '../toast/toast';
import { ToastMessages } from '../../const';

const override = css`
  display: block;
  margin: 200px auto;
`;

function LoadingScreen() {
  return (
    <div>
      <Toast message={ToastMessages.OFFLINE} />
      <DotLoader color={'#696969'} css={override} size={200} />
    </div>
  );
}

export default LoadingScreen;
