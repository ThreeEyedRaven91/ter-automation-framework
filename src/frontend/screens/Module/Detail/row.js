import React, {Component} from 'react';
import { Form } from '../../../components';
import {Col, Row, Button} from "reactstrap";

class RowItem extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: props.item,
    };
  }

  componentDidMount() {

  }

  template() {
    const { value } = this.state;
    const { templates } = this.props;
    if (value && value.type && value.type in templates) {
      return templates[value.type];
    }
    return false;
  }

  render() {
    const template = this.template();
    const { item, index, templates } = this.props;
    const { value } = this.state;

    if (template) {
      return (
        <React.Fragment>
          <Row>
            <Col md={1}>
              <Row style={{ justifyContent: 'space-between' }}>
                <div>{index + 1}.</div>
                <div>
                  <Button color="primary">
                    <i className="fa fa-save" />
                  </Button>
                  {' '}
                  <Button color="danger">
                    <i className="fa fa-trash" />
                  </Button>
                </div>
              </Row>
            </Col>
            <Col md={2}>
              <Form
                template={{
                  elements: [
                    {
                      type: 'select',
                      options: Object.keys(templates).map(temp => ({ label: temp, value: temp })),
                      input_key: 'type',
                      title: 'Type',
                      id: 'select_type',
                      vertical: true,
                    },
                  ],
                }}
                value={value}
                parent={this}
                stateKey="value"
              />
            </Col>
            <Col md={9}>
              <Form
                value={value}
                template={template}
                parent={this}
                stateKey="value"
              />
            </Col>
          </Row>
          <hr />
        </React.Fragment>
      );
    } else {
      return (
        <div>
          Not support {item.type}
        </div>
      );
    }
  }
}

export default RowItem;