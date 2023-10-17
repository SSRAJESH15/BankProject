import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {PiBankDuotone} from 'react-icons/pi'
import '../css/Home.css'

function Home() {
  
  // const [search,setSearch]=useState('');
  const navigate=useNavigate()
    
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
        <h1 id='headerName'>NEW BANK</h1>
        </div>
        <nav>
          <Link to="/login" className="nav-link">
            Login
          </Link>
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </nav>
      </header>
      <main className="main-content">
        <h2>Welcome to Your Website</h2>
        <p>Discover amazing things here.</p>

        {/* <div className="search-bar">
          <input 
          type="text" 
          id='search'
          role='searchbox'
          placeholder="Search..." 
          value={search}
          onChange={e=>setSearch(e.target.value)}
          />
          <button>Search</button>
        </div> */}

      </main>
    </div>
  );
}

export default Home;
