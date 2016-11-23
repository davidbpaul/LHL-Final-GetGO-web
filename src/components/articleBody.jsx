import React, {Component} from 'react';
import NavHead from '../containers/navHead.jsx';
import GridLayout from './gridLayout.jsx';

class ArticleBody extends Component {
  render() {
    return (
      <div>
        <NavHead />
        <GridLayout />
      </div>
    );
  }
};
export default ArticleBody;
