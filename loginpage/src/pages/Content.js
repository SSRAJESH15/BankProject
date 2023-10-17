import React from 'react'
import '../css/Home.css';
import { Link } from 'react-router-dom';
const Content = ({items, handleDelete}) => {


    // const handleDelete = async (id) => {
    //     if(alert("do you want to delete"))
    //     {
    //     try {
    //         await axios.delete(`/api/customers/${id}`);
    //         onDelete(id);
    //         console.log('Customer deleted successfully.');
    //     } catch (error) {
    //         console.error('Error deleting customer:', error);
    //     }
    // }
    // };

  return (
    <div>
    <br /><br /><br />
    <table>
            <thead>
                <tr>
                <th>AccountNo</th>
                <th>username</th>
                <th>phone</th>
                <th>addharNo</th>
                <th>email</th>
                <th>dateOfBirth</th>
                <th>customerAmount</th>
                <th>Actions</th>
                </tr>
            </thead>
            {(items.length)?(
            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                    <td>{item.accountNo}</td>
                    <td>{item.username}</td>
                    <td>{item.phone}</td>
                    <td>{item.addharNo}</td>
                    <td>{item.email}</td>
                    <td>{item.dateOfBirth}</td>
                    <td>{item.customerAmount}</td>
                    <td>
                        <Link to='/updatecustomerform'><button>Edit</button></Link>
                    </td>
                    <td>
                        <button onClick={()=>handleDelete(item.id)}>Delete</button>
                    </td>
                    </tr>
                ))
            }
            </tbody>
            ):(
               <div>
                <p>
                    your list is empty..
                </p>
                </div>
            )}
        </table>
        <hr/>
        </div>
  )
}

export default Content
