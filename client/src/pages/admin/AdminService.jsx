import { useState, useEffect } from 'react';
import ServiceForm from './ServiceForm'; 
import { apiUrl } from '../../../Utils/Config';

const AdminPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/service`); // Corrected the template string
        const data = await response.json();
        setServices(data.services);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  const handleServiceCreated = (newService) => {
    setServices((prevServices) => [...prevServices, newService]);
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <ServiceForm onServiceCreated={handleServiceCreated} />
      <h2>Service Providers</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            {service.fullName} - {service.serviceProvider}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
