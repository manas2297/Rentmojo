import React from 'react';

import {Table} from 'antd';

const TableDetail  = (props) => {
  return (
    <div>
      <Table
        {...props}
        loading={props.loading}
        columns={props.columns}
        dataSource={props.dataSource}
      />
    </div>
  )
}
export default TableDetail;