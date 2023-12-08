"use strict";

import { Model } from "sequelize";

interface RoleAttributes {
  code: string;
  value: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Department extends Model implements RoleAttributes {

    code!: string;
    value!: string;
    
    static associate(models: any) {
      // define association here
      // Department.belongsToMany(models.Project, {
      //   through: "ProjectAssignments",
      // });
    }
  }
  Department.init(
    {
      code: {
        type: DataTypes.STRING,
      },
      value: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Department",
    }
  );
  return Department;
};
