import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { apiUrl } from '../../../Utils/Config.js';
import useStore from '../../store';
import "./admin.css";

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 
  const setLoggedIn = useStore((state) => state.setLoggedIn);
  const setAdmin = useStore((state) => state.setAdmin);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await fetch(`${apiUrl}/api/user`);
        if (!usersResponse.ok) {
          throw new Error(`HTTP error! Status: ${usersResponse.status}`);
        }
        const usersData = await usersResponse.json();
        setUsers(usersData);

        const bookingsResponse = await fetch(`${apiUrl}/api/orders`);
        if (!bookingsResponse.ok) {
          throw new Error(`HTTP error! Status: ${bookingsResponse.status}`);
        }
        const bookingsData = await bookingsResponse.json();
        setBookings(bookingsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/api/user/user/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // Filter out the deleted user from the state
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false); 
    setAdmin(false); 
    localStorage.removeItem('adminToken'); // Remove token from localStorage
    navigate('/adminlogin'); 
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      
      <button onClick={handleLogout} className="logout-button">Logout</button> 

      <section>
        <h2>Registered Users</h2>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>Location</th>
              <th>Email Address</th>
              <th>Action</th> {/* Add Action column header */}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.fullName}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.location}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleDelete(user.id)} className="delete-button">Delete</button>
                </td> {/* Add Delete button */}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2>Order Details</h2>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Email Address</th>
              <th>Phone Number</th>
              <th>Location</th>
              <th>Service Category</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.id}</td>
                <td>{booking.email}</td>
                <td>{booking.phoneNumber}</td>
                <td>{booking.location}</td>
                <td>{booking.serviceProvider}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminPage;
