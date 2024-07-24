import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './serviceform.css';
import { apiUrl } from '../../../Utils/Config';

const ServiceForm = ({ onServiceCreated }) => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [serviceImage, setServiceImage] = useState(null);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      serviceProvider: '',
      email: '',
      price: '',
      description: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Full Name is required'),
      serviceProvider: Yup.string().oneOf(['House Cleaning', 'Dish Washing Services'], 'Invalid service provider').required('Service Provider is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      price: Yup.number().required('Price is required'),
      description: Yup.string().required('Description is required')
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const formData = new FormData();
        formData.append('fullName', values.fullName);
        formData.append('serviceProvider', values.serviceProvider);
        formData.append('email', values.email);
        formData.append('price', values.price);
        formData.append('description', values.description);
        if (profilePicture) {
          formData.append('profilePicture', profilePicture);
        }
        if (serviceImage) {
          formData.append('serviceImage', serviceImage);
        }

        const response = await fetch(`${apiUrl}/api/service/create`, {
          method: 'POST',
          body: formData
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`HTTP error! status: ${response.status}. ${errorData.message || 'Unknown error'}`);
        }

        const data = await response.json();
        if (data.success) {
          onServiceCreated(data.data);
          resetForm();
          setProfilePicture(null);
          setServiceImage(null);
        } else {
          alert(data.message || 'Service creation failed.');
        }
      } catch (error) {
        console.error('Error during service creation:', error);
        alert(`An unexpected error occurred: ${error.message}`);
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Service Providers</h2>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
        />
        {formik.touched.fullName && formik.errors.fullName ? (
          <div className="error">{formik.errors.fullName}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="serviceProvider">Service Provider</label>
        <select
          id="serviceProvider"
          name="serviceProvider"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.serviceProvider}
        >
          <option value="" label="Select service provider" />
          <option value="House Cleaning" label="House Cleaning" />
          <option value="Dish Washing Services" label="Dish Washing Services" />
        </select>
        {formik.touched.serviceProvider && formik.errors.serviceProvider ? (
          <div className="error">{formik.errors.serviceProvider}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
        />
        {formik.touched.price && formik.errors.price ? (
          <div className="error">{formik.errors.price}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />
        {formik.touched.description && formik.errors.description ? (
          <div className="error">{formik.errors.description}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="profilePicture">Profile Picture</label>
        <input
          id="profilePicture"
          name="profilePicture"
          type="file"
          onChange={(event) => setProfilePicture(event.currentTarget.files[0])}
        />
      </div>
      <div>
        <label htmlFor="serviceImage">Service Image</label>
        <input
          id="serviceImage"
          name="serviceImage"
          type="file"
          onChange={(event) => setServiceImage(event.currentTarget.files[0])}
        />
      </div>
      <button type="submit">Create Service</button>
    </form>
  );
};

export default ServiceForm;
