import React from 'react';
import './App.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from 'mdb-react-ui-kit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      service: values.service,
      date: values.date,
      time: values.time
    };
  

    axios
      .post('http://127.0.0.1:5000/book-appointment', data)
      .then(function (response) {
        console.log(response);
        alert('New User Successfully Added.');
        window.location.href = '/';
      })
      .catch(function (response) {
        console.log(response);
        if (response.status === 400) {
          alert('Invalid credentials');
        }
      });
  }

  validationSchema() {
    return Yup.object().shape({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      email: Yup.string().required('Email is required').email('Email is invalid'),
      service: Yup.string().required('Service is required'),
      date: Yup.string().required('Date is required'),
      time: Yup.string().required('Time is required')
    });
  }

  render() {
    const initialValues = {
      firstName: '',
      lastName: '',
      email: '',
      service: '',
      date: '',
      time: ''
    };

    return (
      <MDBContainer fluid className='bg-dark'>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol md='6' className='d-none d-md-block'>
            <MDBCardImage
              src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp'
              alt='Sample photo'
              className='rounded-start'
              fluid
            />
          </MDBCol>

          <MDBCol md='6'>
            <MDBCard className='my-4'>
              <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                <h3 className='mb-5 text-uppercase fw-bold'>
                  Car Service Slot Booking Form
                </h3>

                <Formik
                  initialValues={initialValues}
                  validationSchema={() => this.validationSchema()}  
                  onSubmit={this.handleSubmit}
                >
                  {({ resetForm, values}) => (
                    <Form>
                      <MDBRow>
                        <MDBCol md='6'>
                          <MDBInput
                            wrapperClass='mb-4'
                            label='First Name'
                            size='lg'
                            name='firstName'
                            type='text'
                          />
                          <ErrorMessage
                            name='firstName'
                            component='div'
                            className='text-danger'
                          />
                        </MDBCol>

                        <MDBCol md='6'>
                          <MDBInput
                            wrapperClass='mb-4'
                            label='Last Name'
                            size='lg'
                            name='lastName'
                            type='text'
                          />
                          <ErrorMessage
                            name='lastName'
                            component='div'
                            className='text-danger'
                          />
                        </MDBCol>
                      </MDBRow>

                      <MDBInput
                        wrapperClass='mb-4'
                        label='Email ID'
                        size='lg'
                        name='email'
                        type='text'
                      />
                      <ErrorMessage
                        name='email'
                        component='div'
                        className='text-danger'
                      />

                      <div className='mb-4'>
                        <label htmlFor='service' className='form-label'>
                          Services
                        </label>
                        <select
                          className='form-select'
                          id='service'
                          name='service'
                        >
                          <option value='' disabled>
                            Select a service
                          </option>
                          <option value='Car Wash'>Car Wash</option>
                          <option value='Oil Change'>Oil Change</option>
                          <option value='Brake Service'>Brake Service</option>
                          <option value='General Services'>General Services</option>
                        </select>
                      </div>
                      <ErrorMessage
                        name='service'
                        component='div'
                        className='text-danger'
                      />

                      <MDBInput
                        wrapperClass='mb-4'
                        label='Date'
                        size='lg'
                        name='date'
                        type='date'
                      />
                      <ErrorMessage
                        name='date'
                        component='div'
                        className='text-danger'
                      />

                      <MDBInput
                        wrapperClass='mb-4'
                        label='Time'
                        size='lg'
                        name='time'
                        type='time'
                      />
                      <ErrorMessage
                        name='time'
                        component='div'
                        className='text-danger'
                      />

                      <div className='d-flex justify-content-end pt-3'>
                        <MDBBtn
                          color='light'
                          size='lg'
                          type='button'
                          onClick={resetForm}
                        >
                          Reset all
                        </MDBBtn>
                        <MDBBtn
                          className='ms-2'
                          color='warning'
                          size='lg'
                          type='submit'
                        >
                          Submit form
                        </MDBBtn>
                      </div>
                    </Form>
                  )}
                </Formik>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default App;