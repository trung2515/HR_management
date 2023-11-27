'use strict';
import { Model, DataTypes, Sequelize } from 'sequelize';

interface RoleAttributes {
  code: string;
  value: string;
}

class Role extends Model<RoleAttributes> {
  public code!: string;
  public value!: string;

  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  public static associate(models: any): void {
    // define association here
    Role.hasMany(models.Post, { foreignKey: 'userId', as: 'user' });
  }
}

const initializeRole = (sequelize: Sequelize): void => {
  Role.init({
    code: DataTypes.STRING,
    value: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Role',
  });
};

export { Role, initializeRole };
