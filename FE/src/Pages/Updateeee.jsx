import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useParams } from 'react-router-dom';

 export const Updateeee = () => {
  
  const {id}=useParams()
  const formik = useFormik({
    initialValues: {
      imageUrl: '',
      productName: '',
      price: '',
    },
    validationSchema: Yup.object({
      imageUrl: Yup.string()
   
        .required('Required'),
      productName: Yup.string()
       
        .required('Required'),
      price: Yup.number().required('Required'),
    }),
    onSubmit: async values => {

    await axios.put(`http://localhost:3000/${id}`,values)
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="imageUrl">First Name</label>
      <input
        id="imageUrl"
        type="text"
        {...formik.getFieldProps('imageUrl')}
      />
      {formik.touched.imageUrl && formik.errors.imageUrl ? (
        <div>{formik.errors.imageUrl}</div>
      ) : null}

      <label htmlFor="productName">Last Name</label>
      <input id="productName" type="text" {...formik.getFieldProps('productName')} />
      {formik.touched.productName && formik.errors.productName ? (
        <div>{formik.errors.productName}</div>
      ) : null}

      <label htmlFor="price">Email Address</label>
      <input id="price" type="price" {...formik.getFieldProps('price')} />
      {formik.touched.price && formik.errors.price ? (
        <div>{formik.errors.price}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};