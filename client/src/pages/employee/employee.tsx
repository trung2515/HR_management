import './employee.scss';
import DefaultLayout from "../../layouts/DefaultLayout";
import { Card } from 'primereact/card';
import  Button  from '../../components/forms/button/Button';
import { TabView, TabPanel } from 'primereact/tabview';
import EmployeeTable from "./table/EmployeeTable";
import { Formik, Form } from "formik";
import * as yup from "yup";
import InputField from '../../components/forms/input/InputField';
import { ChangeEvent, useEffect, useState } from 'react';
import AxiosInstance from '../../services/axios';
import apiUrl from '../../constant/apiUrl';
import SelectField from '../../components/forms/select/selectField';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import axios from '../../services/axios';
import toast, { Toaster } from 'react-hot-toast';

const Employee = () => {

    const departments = useSelector((state: RootState) => state.departments.departments);
    const positions = useSelector((state: RootState) => state.position.positions);

    const [employeeData, setEmployeeData] = useState([])
    useEffect(() => {
      getEmployee()
    }, [])
    
    const getEmployee = async() => {
        const result = await AxiosInstance.get(apiUrl.employee.index)
        if (result.data){
            setEmployeeData(result.data.data)
            console.log(result.data.data)
        } 
  
    }

    const countNewEmployee = () => {
        const now = new Date().getTime()
        const newEmployee = employeeData.filter((emp: Record<string, any>) => {
            const timeCreate = new Date(emp.createdAt).getTime()
            return now - timeCreate < (1000*60*60*24) // lớn hơn 1 ngày
        })
        return newEmployee.length
    }

    const initialValues = {
        full_name: '',
        email: '',
        dayOfBirth: '',
        phone: '',
        department_id: '',
        position_id: '',
    };
    const validationSchema = yup.object().shape({
        // full_name: yup.string().required(' is a required field'),
        // email: yup.string().required(' is a required field'),
    });
    const notify = () => toast.success('Here is your toast.');
    const handleAddemployee = async(values: any) => {
        try {
            const response = await axios.post(apiUrl.employee.index,values)
            if (response)  {
                console.log(response)
                getEmployee()
                toast.success('Successfully created employee')
            }
        } catch (error) {
            toast.error('Created employee error')
        }
    };

    return (
        <>
            < DefaultLayout>
                <Toaster />
                <TabView>
                    <TabPanel header="List Employee">
                        <div className="employee-container">
                            <div className="employee-header">
                                <Card>
                                    <div className="card-body pointer">
                                        <span className="card-body-name fs-l">Total Employee</span>
                                        <span className="card-body-content fs-2xl">{employeeData.length}</span>
                                    </div>
                                </Card>
                                <Card>
                                    <div className="card-body pointer">
                                        <span className="card-body-name fs-l">New Employee</span>
                                        <span className="card-body-content fs-2xl">{countNewEmployee()}</span>
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
                                <EmployeeTable data={employeeData}/>
                            </Card>
                        </div>
                    </TabPanel>
                    <TabPanel header="Add Employee">
                        <Formik initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                handleAddemployee(values);
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
                                                        value={formik.values.full_name} 
                                                        errorMessage={errors?.full_name && touched.full_name ? errors?.full_name : ''}
                                                        onChange={
                                                            (event: ChangeEvent<HTMLInputElement>) => {
                                                                setFieldValue("full_name", event.target.value);
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
                                                {/* <div className="form-item">
                                                    <InputField
                                                        type="number"
                                                        name="Deparment code"
                                                        placeholder='Enter department_id code'
                                                        value={formik.values.deparmentId} 
                                                        errorMessage={errors?.deparmentId && touched.deparmentId ? errors?.deparmentId : ''}
                                                        onChange={
                                                            (event: ChangeEvent<HTMLInputElement>) => {
                                                                setFieldValue("deparmentId", event.target.value);
                                                            }
                                                        }
                                                    />
                                                </div> */}
                                                {/* <div className="form-item">
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
                                                </div> */}
                                                <div className="form-item">
                                                    <SelectField
                                                        name="Department"
                                                        data={departments}
                                                        value={formik.values.department_id} 
                                                        errorMessage={errors?.department_id && touched.department_id ? errors?.department_id : ''}
                                                        onChange={
                                                            (event: ChangeEvent<HTMLInputElement>) => {
                                                                setFieldValue("department_id", event.target.value);
                                                            }
                                                        }
                                                    />
                                                </div>
                                                <div className="form-item">
                                                    <SelectField
                                                        name="Position"
                                                        data={positions}
                                                        value={formik.values.position_id} 
                                                        errorMessage={errors?.position_id && touched.position_id ? errors?.position_id : ''}
                                                        onChange={
                                                            (event: ChangeEvent<HTMLInputElement>) => {
                                                                setFieldValue("position_id", event.target.value);
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