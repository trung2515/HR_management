import './employee.scss';
import DefaultLayout from "../../layouts/DefaultLayout";
import { Card } from 'primereact/card';
import  Button  from '../../components/forms/button/Button';
import { TabView, TabPanel } from 'primereact/tabview';
import EmployeeTable from "./table/EmployeeTable";
import { Formik, Form } from "formik";
import * as yup from "yup";
import InputField from '../../components/forms/input/InputField';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import AxiosInstance from '../../services/axios';
import apiUrl from '../../constant/apiUrl';
import SelectField from '../../components/forms/select/selectField';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import axios from '../../services/axios';
import {Toast} from 'primereact/toast';

const Employee = () => {

    const departments = useSelector((state: RootState) => state.departments.departments);
    const positions = useSelector((state: RootState) => state.position.positions);
    const [employeeData, setEmployeeData] = useState([])
    const [infoDataEmployee, setInfoDataEmployee] =useState<Record<string,any>>({})
    const toast = useRef<Toast | null>(null);

    useEffect(() => {
      getEmployee()
    }, [])
    
    const getEmployee = async() => {
        const result = await AxiosInstance.get(apiUrl.employee.index)
        if (result.data){
            setEmployeeData(result.data.data)
            console.log(result.data.data)
            statisticalEmployee(result.data.data)
        } 
  
    }

    const statisticalEmployee = (data:Record<string,any>[]) => {

        const now = new Date().getTime()
        const newEmployee = data.filter((emp: Record<string, any>) => {
            const timeCreate = new Date(emp.createdAt).getTime()
            return now - timeCreate < (1000*60*60*24) 
        })
        const male =  data.filter((emp: Record<string, any>) => emp.gender === 'male')
        const statistical = {
            newEmployee: newEmployee.length,
            male: male.length,
            female: data.length - male.length
        }
        setInfoDataEmployee(statistical)
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
        full_name: yup.string().required(' is a required field'),
        email: yup.string().email('invalid email').required(' is a required field'),
    });

    const handleAddemployee = async(values: any) => {
        try {
            const response = await axios.post(apiUrl.employee.index,values)
            if (response)  {
                console.log(response)
                getEmployee()
                if (toast.current) {
                    toast.current.show({severity: 'success', summary: 'Confirmed', detail: 'Create successfully', life: 1500});
                  }
            }
        } catch (error) {
            if (toast.current) {
                toast.current.show({severity: 'error', summary: 'Confirmed', detail: 'Create error', life: 1500});
              }
        }
    };

    return (
        <>
            < DefaultLayout>
            <Toast ref={toast} />
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
                                        <span className="card-body-content fs-2xl">{infoDataEmployee.newEmployee}</span>
                                    </div>
                                </Card>
                                <Card>
                                    <div className="card-body pointer">
                                        <span className="card-body-name fs-l">Male</span>
                                        <span className="card-body-content fs-2xl">{infoDataEmployee.male}</span>
                                    </div>
                                </Card>
                                <Card>
                                    <div className="card-body pointer">
                                        <span className="card-body-name fs-l">Female</span>
                                        <span className="card-body-content fs-2xl">{infoDataEmployee.female}</span>
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div className="employee-table">
                            <Card>
                                <EmployeeTable data={employeeData} onDelete={getEmployee}/>
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