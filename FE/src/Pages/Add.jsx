import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";


export const SignupForm = () => {

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
      price: Yup.number()
      .required('Required'),
    }),
    onSubmit: async values => {
     await axios.post("http://localhost:3000/",values)
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="imageUrl">Image Url</label>
      <input
        id="imageUrl"
        type="text"
        {...formik.getFieldProps('imageUrl')}
      />
      {formik.touched.imageUrl && formik.errors.imageUrl ? (
        <div>{formik.errors.imageUrl}</div>
      ) : null}

      <label htmlFor="productName">Product Name</label>
      <input id="productName" type="text" {...formik.getFieldProps('productName')} />
      {formik.touched.productName && formik.errors.productName ? (
        <div>{formik.errors.productName}</div>
      ) : null}

      <label htmlFor="price">price</label>
      <input id="price" type="price" {...formik.getFieldProps('price')} />
      {formik.touched.price && formik.errors.price ? (
        <div>{formik.errors.price}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};
