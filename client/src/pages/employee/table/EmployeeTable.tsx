import 'primeicons/primeicons.css';
import { Link } from 'react-router-dom';
const EmployeeTable = () => {
    return(
        <>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>CLIENT NAME</th>
              <th>TEAM</th>
              <th>PROJECT</th>
              <th>PROJECT COST</th>
              <th>PAYMENT</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
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
  
          </tbody>
        </table>
      </>
    )
}

export default EmployeeTable