import 'primeicons/primeicons.css';
import { Link} from 'react-router-dom';
import {ConfirmDialog, confirmDialog} from 'primereact/confirmdialog';
import {Toast} from 'primereact/toast';
import {ChangeEvent, useRef, useState} from 'react';
import axios from '../../../services/axios';
import apiUrl from '../../../constant/apiUrl';
import {Dialog} from 'primereact/dialog';
import {Formik,Form} from 'formik';
import {Card} from 'primereact/card';
import InputField from '../../../components/forms/input/InputField';
import SelectField from '../../../components/forms/select/selectField';
import  Button  from '../../../components/forms/button/Button';
import {RootState} from '../../../redux/store';
import {useSelector} from 'react-redux';
const EmployeeTable = ({...props}) => {
  const {onDelete} = props;

  const departments = useSelector((state: RootState) => state.departments.departments);
  const positions = useSelector((state: RootState) => state.position.positions);
  const toast = useRef<Toast | null>(null);
  const [dataEdit, setDataEdit] = useState({});
  const [visible, setVisible] = useState(false);

  const editEmployee = (data:any) => {
      console.log(data);
      
  }

  const deleteEmployee = async (id: string) => {
    try {
      const url = apiUrl.employee.index + '/' + id;
      const response = await axios.put(url);
      if (response) {
        console.log(response);
        onDelete();
        if (toast.current) {
          toast.current.show({severity: 'success', summary: 'Confirmed', detail: 'Deleted successfully', life: 1500});
        }
      }
    } catch (error) {
      if (toast.current) {
        toast.current.show({severity: 'error', summary: 'Confirmed', detail: 'Deleted error', life: 1500});
      }
    }

  };


  const confirmDelete = (employee: Record<string, any>) => {
    confirmDialog({
      message: `Do you want to delete this employee ${employee.employee_id} ?`,
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptClassName: 'p-button-danger',
      accept: () => deleteEmployee(employee.employee_id),
      reject: () => { }
    });
  };

  const initialValues = {
    full_name: '',
    email: '',
    dayOfBirth: '',
    phone: '',
    department_id: '',
    position_id: '',
};

  const {data} = props;
  return (
    <>
      <Toast ref={toast} />
      <ConfirmDialog />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>FULL NAME</th>
            <th>DEPARTMENT</th>
            <th>POSITION</th>
            <th>PHONE</th>
            <th>EMAIL</th>
            <th>TEMP</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {
            data.length > 0 ? data.map((item: Record<string, any>, index: number) => {
              return (
                <tr key={index}>
                  <td>#{item.employee_id}</td>
                  <td>{item.full_name}</td>
                  <td>{item.department?.value}</td>
                  <td>{item.position?.value}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{ }</td>
                  <td>
                    <div className='table-acction'>
                      <Link to={'/employee/1'}>
                        <i className="pi pi-eye pointer icon-hover" ></i>
                      </Link>
                      <i className="pi pi-pencil pointer icon-hover ml-3" onClick={() =>{ setVisible(true)}} 
                      ></i>

                      <i className="pi pi-trash pointer icon-hover ml-3" onClick={() => confirmDelete(item)}></i>
                    </div>
                  </td>
                </tr>
              );
            })
              :
              <tr>
                <td colSpan={8}><p style={{textAlign: 'center'}}>No data</p></td>
              </tr>
          }
          <Dialog header="Edit employee" visible={visible} style={{width: '50vw'}} onHide={() => setVisible(false)}>
              <Formik initialValues={initialValues}
                            // validationSchema={validationSchema}
                            onSubmit={(values) => {
                                editEmployee(values); 
                                setVisible(false) 
                            }}>

                            {(formik) => {
                                const { errors, touched, setFieldValue } = formik;
                                return (
                                    <Form>
                                       
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
                                                  <Button action='cancel' label="Cancel" className='ml-2' onClick={ () => {  setVisible(false) }}/>
                                            </div>
                                            
                                    </Form>
                                );
                            }}
               </Formik>
          </Dialog>

        </tbody>
      </table>
    </>
  );
};

export default EmployeeTable;