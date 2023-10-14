import React, { useState } from 'react';

const Services = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Booking created successfully');
      } else {
        console.error('Failed to create booking');
      }
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
      <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} />
      <input type="text" name="service" placeholder="Service" value={formData.service} onChange={handleInputChange} />
      <button type="submit">Submit</button>
    </form>
  );
};


export default Services;
