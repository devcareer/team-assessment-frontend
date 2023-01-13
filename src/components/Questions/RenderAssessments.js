import { Fragment } from 'react';
import Tests from './Tests';
import Timer from './Timer';

const RenderAssessments = () => {
  return (
    <Fragment>
      <Timer />
      <Tests />
    </Fragment>
  );
};

export default RenderAssessments;
