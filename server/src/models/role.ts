"use strict";

import { Model } from "sequelize";

interface RoleAttributes {
  code: string;
  value: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Role extends Model implements RoleAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    code!: string;
    value!: string;
    static associate(models: any) {
      // define association here
      // Role.belongsToMany(models.Project, {
      //   through: "ProjectAssignments",
      // });
    }
  }
  Role.init(
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
      modelName: "Role",
    }
  );
  return Role;
};
