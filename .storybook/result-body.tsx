import * as React from 'react';
import { IResultBody } from '../src/search-results/index';

const ResultBody: React.SFC<IResultBody> = (props) =>
    <div>
        {props.result}
    </div>

export default ResultBody;