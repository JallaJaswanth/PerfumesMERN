import React, { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { deleteUser, listUsers } from '../actions/userActions';

const UserListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  if (!userInfo) {
    history.push('/login');
  }

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push('/login');
    }
  }, [dispatch, history, successDelete, userInfo]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <>
      <h1>Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table
          striped
          responsive
          bordered
          hover
          className='table-sm'
          style={{ color: 'white' }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>
                <a style={{ color: 'white' }} href={`/mailto:${user.email}`}>
                  {user.email}
                </a>
              </td>
              <td>
                {user.isAdmin ? (
                  <i className='fas fa-check' style={{ color: 'green' }}></i>
                ) : (
                  <i className='fas fa-times' style={{ color: 'red' }}></i>
                )}
              </td>
              <td>
                <Link as={Link} to={`/admin/user/${user._id}/edit`}>
                  <Button variant='secondary' className='btn-sm mr-2'>
                    <i className='fas fa-edit'></i>
                  </Button>
                </Link>
                <Button
                  variant='danger'
                  className='btn-sm'
                  onClick={() => deleteHandler(user._id)}
                >
                  <i className='fas fa-trash'></i>
                </Button>
              </td>
            </tr>
          ))}
        </Table>
      )}
    </>
  );
};

export default UserListScreen;
