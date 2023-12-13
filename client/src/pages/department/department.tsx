import {useSelector} from "react-redux";
import DefaultLayout from "../../layouts/DefaultLayout";
import { RootState } from '../../redux/store'
const Department = () => {

    const departments = useSelector((state: RootState) => state.departments.departments);
    console.log('departments',departments);
    
    return(
        <DefaultLayout>

            <p>page department</p>
        </DefaultLayout>
    )
}

export default Department