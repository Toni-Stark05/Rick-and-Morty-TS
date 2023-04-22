import {DataTypes, Model} from "sequelize";
import database from "../../core/database/db.module";

class Location extends Model {}

Location.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dimension: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},
  {
    sequelize: database,
    tableName: 'Locations',
  })

export default Location