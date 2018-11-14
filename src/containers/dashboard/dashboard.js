import React from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-flexbox-grid';
import { Typography } from '@material-ui/core';

import Layout from '../../components/layout';

const Dashboard = (props) => console.log(props) || (
  <Layout>
    <Row center="md">
      <Typography variant="h3" gutterBottom>The Dashboard</Typography>
    </Row>
  </Layout>
);

const mapStateToProps = ({app}) => ({app});

export default connect(mapStateToProps, null)(Dashboard);
