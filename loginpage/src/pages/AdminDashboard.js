import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import SearchItem from './SearchItem';
import Content from './Content';
import {PiBankDuotone} from 'react-icons/pi'


const AdminDashboard = ({Type}) => {
  const [search,setSearch]=useState('');
  const [items, setItems] = useState('');
  const navigate=useNavigate()

  useEffect(() => {
    fetchTodos();
  }, []);


  const fetchTodos = async () => {
    await axios.get('http://localhost:8080/api/getcustomer')
    .then((response) => {
      setItems(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
};


   const handleDelete = async (id) => {

        try {
            await axios.delete(`http://localhost:8080/api/customers/delete/${id}`);
            // onDelete(id);
            console.log('Customer deleted successfully.');
        } catch (error) {
            console.error('Error deleting customer:', error);
        }
    };


  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">
        <h1>
          <PiBankDuotone 
          role="button"
          tabIndex="0"
          onClick={()=>navigate('/')}
          />
          </h1>
        </div>
        <div>
        <h1 id='headerName'>ADMIN DASHBOARD</h1>
        </div>
        <nav>
        <Link to="/addcustomer" className="nav-link">addcustomer</Link>
        <Link to='/withdrawcomponenet' className="nav-link">withdraw</Link>
        <Link to='/depositcomponent' className="nav-link">Deposit</Link>
        <Link to="/logout" className="nav-link">LogOut</Link>
        </nav>
      </header>
      <main className="main-content">
        <h2>Welcome to Your Website</h2>
        <p>Discover amazing things here.</p>

        <SearchItem
          search={search}
          setSearch={setSearch}
        />

        {/* .filter((item=>(item.username).toLowerCase()).includes(search)) */}
        <Content
          items={items}
          handleDelete={handleDelete}
          Type={Type}
        />

      </main>
    </div>
  )
}

export default AdminDashboard
