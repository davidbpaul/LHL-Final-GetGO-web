import React, {Component} from 'react';
import NavHead from './nav/navHead.jsx';
import GridLayout from './body/gridLayout.jsx';

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
