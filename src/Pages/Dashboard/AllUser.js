
import React from 'react';
import Loading from '../Shared/Loading/Loading';
import { useQuery } from 'react-query';

const AllUser = () => {
    const { email } = users;
    const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/user').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `bearar ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <h3>Total Users :{users.length}</h3>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{user.email}</td>
                                    <td><button onClick={makeAdmin} className='btn btn-xs'>Make An Admin</button></td>
                                    <td><button className='btn btn-xs'>Remove User</button></td>



                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;