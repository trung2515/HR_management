'use strict';
import { Model, DataTypes, Sequelize } from 'sequelize';

interface UserAttributes {
  name: string;
  email: string;
  password: string;
  avatar: string;
  role_code: string;
}

class User extends Model<UserAttributes> {
  public name!: string;
  public email!: string;
  public password!: string;
  public avatar!: string;
  public role_code!: string;

  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  public static associate(models: any): void {
    // define association here
    User.hasMany(models.Post, { foreignKey: 'userId', as: 'user' });
  }
}

const initializeUser = (sequelize: Sequelize): void => {
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    role_code: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
};

export { User, initializeUser };
