import React, { Component } from 'react';
import queryString from 'query-string';
import API from '../../../apis/index';
import { Box } from '../../../components';
import RowItem from './row';

class TestCaseListScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      templates: false,
    };
  }

  componentDidMount() {
    this.fetchData();
    this.fetchTemplate();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.path && this.props.path !== nextProps.path) {
      this.fetchData(nextProps)
    }
  }

  async fetchTemplate() {
    const result = await API.template.get();
    this.setState({
      templates: result.data,
    });
  }

  async fetchData(props = null) {
    const { location } = props || this.props;
    const params = queryString.parse(location.search);
    if (params && params.path) {
      const result = await API.testCase.getByPath(params.path);
      const { data } = result;
      this.setState({
        data,
      });
    }
  }

  render() {
    const { data, templates } = this.state;
    return (
      <Box title={data && data.title}>
        {data && templates && data.steps && data.steps.map((item, index) => (
          <RowItem
            item={item}
            index={index}
            templates={templates}
          />
        ))}
      </Box>
    );
  }
}

export default TestCaseListScreen;
