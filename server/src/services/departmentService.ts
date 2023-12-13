import db from "../models";

class DepartmentService {
    public getAllDepartment = async () => {
        try {
            const response = await db.Department.findAll({
                where: {
                    deleted: '0'
                },
            });
            return {
                err: response ? 0 : 1,
                mes: response ? 'Department not found' : 'error',
                data: response
            };
        } catch (error) {
            throw error;
        }
    };
}

export default new DepartmentService()
