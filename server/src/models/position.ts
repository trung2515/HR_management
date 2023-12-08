"use strict";

import { Model } from "sequelize";

interface RoleAttributes {
  code: string;
  value: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Position extends Model implements RoleAttributes {

    code!: string;
    value!: string;
    
    static associate(models: any) {
      // define association here
      // Position.belongsToMany(models.Project, {
      //   through: "ProjectAssignments",
      // });
    }
  }
  Position.init(
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
      modelName: "Position",
    }
  );
  return Position;
};
