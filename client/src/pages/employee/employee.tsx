import './employee.scss';
import DefaultLayout from "../../layouts/DefaultLayout";
import { Card } from 'primereact/card';
import  Button  from '../../components/forms/button/Button';
import { TabView, TabPanel } from 'primereact/tabview';
import EmployeeTable from "./table/EmployeeTable";
import { Formik, Form } from "formik";
import * as yup from "yup";
import InputField from '../../components/forms/input/InputField';
import { ChangeEvent } from 'react';

const Employee = () => {
    const initialValues = {
        name: '',
        email: '',
        dayOfBirth: '',
        phone: '',
        deparmentId: '',
        position: '',
    };
    const validationSchema = yup.object().shape({
        name: yup.string().required(' is a required field'),
        email: yup.string().email(' Invalid email').required(' is a required field'),
        deparmentId: yup.string().required(' is a required field'),
    });

    const handleSubmit = (values: any) => {
        console.log('values', values);
    };

    return (
        <>
            < DefaultLayout>
                <TabView>
                    <TabPanel header="List Employee">
                        <div className="employee-container">
                            <div className="employee-header">
                                <Card>
                                    <div className="card-body pointer">
                                        <span className="card-body-name fs-l">Total Employee</span>
                                        <span className="card-body-content fs-2xl">456</span>
                                    </div>
                                </Card>
                                <Card>
                                    <div className="card-body pointer">
                                        <span className="card-body-name fs-l">New Employee</span>
                                        <span className="card-body-content fs-2xl">123</span>
                                    </div>
                                </Card>
                                <Card>
                                    <div className="card-body pointer">
                                        <span className="card-body-name fs-l">Male</span>
                                        <span className="card-body-content fs-2xl">255</span>
                                    </div>
                                </Card>
                                <Card>
                                    <div className="card-body pointer">
                                        <span className="card-body-name fs-l">Female</span>
                                        <span className="card-body-content fs-2xl">155</span>
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div className="employee-table">
                            <Card>
                                <EmployeeTable />
                            </Card>
                        </div>
                    </TabPanel>
                    <TabPanel header="Add Employee">
                        <Formik initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                handleSubmit(values);
                            }}>

                            {(formik) => {
                                const { errors, touched, setFieldValue } = formik;
                                return (
                                    <Form>
                                        <Card>
                                            <div className="form">
                                                <div className="form-item">
                                                    <InputField
                                                        type="text"
                                                        name="Employee name"
                                                        placeholder='Enter employee name'
                                                        value={formik.values.name} 
                                                        errorMessage={errors?.name && touched.name ? errors?.name : ''}
                                                        onChange={
                                                            (event: ChangeEvent<HTMLInputElement>) => {
                                                                setFieldValue("name", event.target.value);
                                                            }
                                                        }
                                                    />
                                                </div>
                                                <div className="form-item">
                                                    <InputField
                                                        type="text"
                                                        name="Email"
                                                        placeholder='Enter Email'
                                                        value={formik.values.email} 
                                                        errorMessage={errors?.email && touched.email ? errors?.email : ''}
                                                        onChange={
                                                            (event: ChangeEvent<HTMLInputElement>) => {
                                                                setFieldValue("email", event.target.value);
                                                            }
                                                        }
                                                    />
                                                </div>
                                                <div className="form-item">
                                                    <InputField
                                                        type="date"
                                                        name="Day of birth"
                                                        placeholder='Enter day of birth'
                                                        value={formik.values.dayOfBirth} 
                                                        errorMessage={errors?.dayOfBirth && touched.dayOfBirth ? errors?.dayOfBirth : ''}
                                                        onChange={
                                                            (event: ChangeEvent<HTMLInputElement>) => {
                                                                setFieldValue("dayOfBirth", event.target.value);
                                                            }
                                                        }
                                                    />
                                                </div>
                                                <div className="form-item">
                                                    <InputField
                                                        type="number"
                                                        name="Phone"
                                                        placeholder='Enter number phone'
                                                        value={formik.values.phone} 
                                                        errorMessage={errors?.phone && touched.phone ? errors?.phone : ''}
                                                        onChange={
                                                            (event: ChangeEvent<HTMLInputElement>) => {
                                                                setFieldValue("phone", event.target.value);
                                                            }
                                                        }
                                                    />
                                                </div>
                                                <div className="form-item">
                                                    <InputField
                                                        type="number"
                                                        name="Deparment code"
                                                        placeholder='Enter department code'
                                                        value={formik.values.deparmentId} 
                                                        errorMessage={errors?.deparmentId && touched.deparmentId ? errors?.deparmentId : ''}
                                                        onChange={
                                                            (event: ChangeEvent<HTMLInputElement>) => {
                                                                setFieldValue("deparmentId", event.target.value);
                                                            }
                                                        }
                                                    />
                                                </div>
                                                <div className="form-item">
                                                    <InputField
                                                        type="text"
                                                        name="Position"
                                                        placeholder='Enter position'
                                                        value={formik.values.position} 
                                                        errorMessage={errors?.position && touched.position ? errors?.position : ''}
                                                        onChange={
                                                            (event: ChangeEvent<HTMLInputElement>) => {
                                                                setFieldValue("position", event.target.value);
                                                            }
                                                        }
                                                    />
                                                </div>
                                              
                                            </div>
                                            <div className="form-footer">
                                                  <Button type='submit' label="Submit" />
                                                  <Button action='cancel' label="Cancel" className='ml-2' onClick={ () => {
                                                     formik.resetForm() ;
                                                     }}/>
                                            </div>
                                            
                                        </Card>
                                    </Form>
                                );
                            }}
                        </Formik>

                    </TabPanel>
                </TabView>

            </DefaultLayout>
        </>
    );
};

export default Employee;