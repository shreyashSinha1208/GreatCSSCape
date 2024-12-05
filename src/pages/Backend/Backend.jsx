import React from 'react';
import axios from 'axios';
import { useState } from 'react';
const BackendOutputPage = () => {


  const [postOffices, setPostOffices] = useState([]);
  const [pincode, setPincode] = useState('');
  const handleFetch = async () => {
    try {

      const response = await axios.get(`http://localhost:5000/api/pincode/${pincode}`);
      setPostOffices(response.data || []);
    } catch (error) {
      console.error("Error fetching pincode details:", error.message);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ padding: "20px" }}>
        <h1>Pincode Details</h1>
        <input
          type="text"
          placeholder="Enter Pincode"
        
          onChange={(e) => setPincode(e.target.value)}
          style={{ padding: "10px", marginRight: "10px" }}
        />
        <button onClick={handleFetch} style={{ padding: "10px" }}>
          Fetch Details
        </button>
        <div>
          {postOffices.length > 0 ? (
            <ul>
              {postOffices.map((office, index) => (
                <li key={index}>
                  <strong>{office.Name}</strong> - {office.Block}, {office.District}, {office.State}
                </li>
              ))}
            </ul>
          ) : (
            <p>No data found for this pincode.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BackendOutputPage;
