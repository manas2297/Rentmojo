import React, { useState, useEffect } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { DatePicker, Button, Pagination, Row, Col} from 'antd';
import './home.css'
import Header from '../../components/Header'
import InputFiled from '../../components/Input'
import Cards from '../../components/Cards';
import { getCases, getUsers } from './actions';
import DatePickerComponent from '../../components/DatePickerComponent';
import { getUnixTime, debounce } from '../../utils/common';
import ErrorComponent from '../../components/ErrorComponent';
import TableDetail from '../../components/TableDetail';
import { Link } from 'react-router-dom';
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
        <Header/>
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
