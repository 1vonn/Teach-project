import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import './shop.css';
import { apiUrl } from '../../../Utils/Config';

const BookingForm = () => {
  const [error, setError] = useState(null);
  
  const formik = useFormik({
    initialValues: {
      email: '',
      phoneNumber: '',
      serviceProvider: '',
      location: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      phoneNumber: Yup.string()
        .required('Phone number is required')
        .matches(/^[0-9]+$/, 'Must be only digits')
        .length(10, 'Must be exactly 10 digits'),
      serviceProvider: Yup.string()
        .oneOf(['Lucy James', 'Jasper James', 'Cynthia James', 'Ruth James'], 'Invalid service provider')
        .required('Service provider is required'),
      location: Yup.string()
        .required('Location is required')
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch(`${apiUrl}/api/orders/book`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        if (data.success) {
          setError(null);
          alert('Order received successfully');
        } else {
          setError(data.message);
        }
      } catch (error) {
        console.error('Error in making order:', error);
        setError('An unexpected error occurred. Please try again.');
      }
    },
  });

  return (
    <div className='booking-content'>
      <div className='booking-form'>
        <form onSubmit={formik.handleSubmit}>
          <h2>Book Form</h2>
          <div>
            <label htmlFor='email'>Email Address</label>
            <input
              id='email'
              name='email'
              type='email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='error'>{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor='phoneNumber'>Phone Number</label>
            <input
              id='phoneNumber'
              name='phoneNumber'
              type='text'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className='error'>{formik.errors.phoneNumber}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor='serviceProvider'>Service Provider</label>
            <select
              id='serviceProvider'
              name='serviceProvider'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.serviceProvider}
            >
              <option value='' label='Select provider' />
              <option value='Lucy James' label='Lucy James' />
              <option value='Jasper James' label='Jasper James' />
              <option value='Cynthia James' label='Cynthia James' />
              <option value='Ruth James' label='Ruth James' />
            </select>
            {formik.touched.serviceProvider && formik.errors.serviceProvider ? (
              <div className='error'>{formik.errors.serviceProvider}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor='location'>Location</label>
            <input
              id='location'
              name='location'
              type='text'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.location}
            />
            {formik.touched.location && formik.errors.location ? (
              <div className='error'>{formik.errors.location}</div>
            ) : null}
          </div>
          {error && <div className='error'>{error}</div>}
          <button type='submit'>Order Now</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
