import React, { useState, useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Row} from 'antd';
import { Link } from 'react-router-dom';
import './home.css'
import { getUsers } from './actions';
import TableDetail from '../../components/TableDetail';

const Home = props => {
  const [usersData, setUserData] = useState([]);
  const [tableLoading, setTableLoading] = useState(false);
  const [pagination, setPagination] = useState({current: 1, pageSize: 4});
  
  useEffect(() => {
    setTableLoading(true);
    props.getUsers();
  },[]);
  useEffect(() => {
    if(props.isUserFetched && !props.isError) {
      setTableLoading(false);
      setUserData(props.usersData);
    } else {
      setTableLoading(false);
      setUserData([]);
    }
  },[props.isUserFetched]);

  const handleTableChange = (pagination, filters, sorter) => {
    setPagination({...pagination,total: usersData.length});

  }
  const tableColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width:'300px'
    },
    {
      title: 'Company Name',
      key:'company',
      dataIndex: 'company',
      render: (company) => {
        return (
          <div>
            {company.name}
          </div>
        )
      },
      width:'300px'
    },
    {
      title: 'Blog post',
      key:'id',
      dataIndex: 'id',
      render: (id, data) => {
        const url = `/posts?userId=${id}`;
        return (
          <div>
            <Link to={url}>Posts by {data.name}</Link>
          </div>
        )
        
      }
    }
  ];
  return (
    <div className="home">
      <Row justify="center">
        <h1>
        Users List
        </h1>
      </Row>
      <Row justify="center">
          <TableDetail 
            columns={tableColumns}
            dataSource={usersData}
            loading={tableLoading}
            pagination={pagination}
            onChange={handleTableChange}
          /> 
        
      </Row>
      
    </div>
  )
  
}

const mapStateToProps = state => ({
  usersData: state.userState.usersData,
  isUserFetched: state.userState.isUserFetched,
  isError: state.userState.isError,
})
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getUsers,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
