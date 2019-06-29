import React, { Component } from 'react';
import { Box } from '../../../components';
import TestCaseTree from './tree';

class TestCaseListScreen extends Component {
  render() {
    const { history } = this.props;
    return (
      <Box title="Test Case List">
        <TestCaseTree
          didSelectItem={(item) => history.push(`/test_case/by_path?path=${item.key}`)}
        />
      </Box>
    );
  }
}

export default TestCaseListScreen;
