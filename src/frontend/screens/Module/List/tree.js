import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
import API from '../../../apis/index';
import { Box } from '../../../components';
import TreeMenu from 'react-simple-tree-menu';

const process = (trees) => {
  const result = [];
  for (let i = 0; i < trees.length; i ++) {
    const item = trees[i];
    if (item.subFiles) {
      result.push({
        key: item.path,
        label: item.name,
        nodes: process(item.subFiles),
      });
    } else {
      result.push({
        key: item.path,
        label: `${item.path} - ${item.name}`,
      });
    }
  }

  return result;
};

class TestCaseTree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.fetchData()
  }

  async fetchData() {
    const result = await API.module.get();
    const { data } = result;
    this.setState({
      data: process(data),
    });
  }

  render() {
    const { data } = this.state;
    const { didSelectItem } = this.props;
    return (
      <TreeMenu
        data={data}
        onClickItem={(item) => didSelectItem && didSelectItem(item)}
      />
    );
  }
}

export default TestCaseTree;
