import { Link, useLocation } from "react-router-dom";
import './Breadcrumb.scss'
//  const Breadcrumbs = [
//     {
//       "interview": "面談結果",
//       "nursing-leave": "看護休暇",
//       "injury": "傷病系",
//       "nursing-care": "介護系",
//       "pregnancy": "妊娠系",
//       "employee-information": "社員情報",
//       "employee-contract": "契約社員登録"
//     },
//     {
//       "create-interview": "面談結果入力",
//       "pregnancy-output-manual-pregnancy": "妊娠系産休育休手順書出力",
//       "create-nursing-care": "介護系入力",
//       "create-pregnancy": "妊娠系入力"
//     }
//   ]

const Breadcrumb = () => {
    const location = useLocation();
    const pathName = location.pathname.split("/").filter((x) => x);
    const name = pathName[0]
    // const routeTo = `/${pathName}`;
    // console.log(routeTo);
    
    // console.log(pathName);
    
  return (
    pathName.length > 1 ? <nav>
      <div className="breadcrumb">

      <span>
            <Link className=" breadcrumb-item" to={ `/${name}` }>{ name } </Link>
            <i className="pi pi-chevron-right fs-s ml-2" ></i>
        </span>

        <span className="ml-2 breadcrumb-item active" >{ name  } Edit</span>
          
      
        
      </div>
    </nav> : null
  );
};

export default Breadcrumb;
