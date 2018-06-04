// @flow
import * as React from 'react';
import SideMenu from '../components/SideMenu';
import pages from '../navigation/pages';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <div id="app">
        <SideMenu pages={pages}/>
        {this.props.children}
      </div>
    );
  }
}
