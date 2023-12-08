import 'primeicons/primeicons.css';
import { Link } from 'react-router-dom';
import { email } from '../../../../../server/src/utils/joi_schema';
const EmployeeTable = ({...props}) => {

  const {data} = props
    return(
        <>
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
              data.length > 0 ?  data.map((item: Record<string,any>, index:number) => {
                return (
                  <tr key={index}>
                    <td>#{item.employee_id}</td>
                    <td>{item.full_name}</td>
                    <td>{item.department?.value}</td>
                    <td>{item.position?.value}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{}</td>
                    <td>
                    <div className='table-acction'>
                        <Link to={'/employee/1'}>
                          <i className="pi pi-eye pointer icon-hover" ></i>
                        </Link>
                        <i className="pi pi-pencil pointer icon-hover ml-3" ></i>
                        <i className="pi pi-trash pointer icon-hover ml-3" ></i>
                      </div>
                    </td>
                  </tr>
                )
              }) 
              : 
              <tr>
                <td colSpan={8}><p style={{textAlign:'center'}}>No data</p></td>
              </tr>
            }
            {/* <tr>
              <td>#AD1245</td>
              <td>Sean Black</td>
              <td>Team ABC</td>
              <td>Angular Admin</td>
              <td>$14,500</td>
              <td>Done</td>
              <td>Delivered</td>
              <td>
                <div className='table-acction'>
                  <Link to={'/employee/1'}>
                    <i className="pi pi-eye pointer icon-hover" ></i>
                  </Link>
                  <i className="pi pi-pencil pointer icon-hover ml-3" ></i>
                  <i className="pi pi-trash pointer icon-hover ml-3" ></i>
                </div>
              </td>
            </tr>
            <tr>
              <td>#AD1245</td>
              <td>Sean Black</td>
              <td>Team ABC</td>
              <td>Angular Admin</td>
              <td>$14,500</td>
              <td>Done</td>
              <td>Delivered</td>
              <td>
              <div className='table-acction'>
                  <Link to={'/employee/1'}>
                    <i className="pi pi-eye pointer icon-hover" ></i>
                  </Link>
                  <i className="pi pi-pencil pointer icon-hover ml-3" ></i>
                  <i className="pi pi-trash pointer icon-hover ml-3" ></i>
                </div>
              </td>
            </tr>
            <tr>
              <td>#AD1245</td>
              <td>Sean Black</td>
              <td>Team ABC</td>
              <td>Angular Admin</td>
              <td>$14,500</td>
              <td>Done</td>
              <td>Delivered</td>
              <td>
              <div className='table-acction'>
                  <Link to={'/employee/1'}>
                    <i className="pi pi-eye pointer icon-hover" ></i>
                  </Link>
                  <i className="pi pi-pencil pointer icon-hover ml-3" ></i>
                  <i className="pi pi-trash pointer icon-hover ml-3" ></i>
                </div>
              </td>
            </tr>
            <tr>
              <td>#AD1245</td>
              <td>Sean Black</td>
              <td>Team ABC</td>
              <td>Angular Admin</td>
              <td>$14,500</td>
              <td>Done</td>
              <td>Delivered</td>
              <td>
              <div className='table-acction'>
                  <Link to={'/employee/1'}>
                    <i className="pi pi-eye pointer icon-hover" ></i>
                  </Link>
                  <i className="pi pi-pencil pointer icon-hover ml-3" ></i>
                  <i className="pi pi-trash pointer icon-hover ml-3" ></i>
                </div>
              </td>
            </tr>
            <tr>
              <td>#AD1245</td>
              <td>Sean Black</td>
              <td>Team ABC</td>
              <td>Angular Admin</td>
              <td>$14,500</td>
              <td>Done</td>
              <td>Delivered</td>
              <td>
              <div className='table-acction'>
                  <Link to={'/employee/1'}>
                    <i className="pi pi-eye pointer icon-hover" ></i>
                  </Link>
                  <i className="pi pi-pencil pointer icon-hover ml-3" ></i>
                  <i className="pi pi-trash pointer icon-hover ml-3" ></i>
                </div>
              </td>
            </tr> */}
  
          </tbody>
        </table>
      </>
    )
}

export default EmployeeTable