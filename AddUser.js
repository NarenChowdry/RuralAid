import React, { useState } from 'react';
import './AddUser.css';
import { useNavigate } from 'react-router-dom';

function AddUser() {
  const [username, setCustomerName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    const user = { username, password,confirmPassword };

    try {
        const response = await fetch('http://localhost:8080/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (response.ok) {
            alert('User added successfully!');
            navigate('/ulist'); 
        } else {
            const errorData = await response.json();
            alert(`Failed to add user: ${errorData.message || 'Unknown error'}`);
        }
    } catch (error) {
        console.error('Error during adding user:', error);
        alert('An error occurred while adding the user.');
    }
};


  return (
    <div className="adduser-container">
      <div className="adduser-header">
       
        <h2>Add New User</h2>
      </div>
      <div className="adduser-form-container">
        <form className="adduser-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">UserName</label>
            <input
                        type="text"
                        id="customerName"
                        name="customerName"
                        placeholder="Enter customer name"
                        value={username}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className='userbox'
                        required
                    />
          </div>
          <div className="form-group">
            <label htmlFor="name">Password</label>
            <input
                        type="text"
                        id="password"
                        name="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='userbox'
                        required
                    />
          </div>
          <div className="form-group">
            <label htmlFor="name">Repeat Password</label>
            <input
                        type="text"
                        id="repeat"
                        name="repeat"
                        placeholder="Repeat Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className='userbox'
                        required
                    />
          </div>
          
          
          
          <button type="submit" className="adduser-button">Add User</button>
          <button 
            type="button" 
            onClick={() => navigate('/user-list')} 
            className="back-buttonn"
          >
            Back to User List
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;