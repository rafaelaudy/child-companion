import { DataTypes, Model } from 'sequelize';
import sequelize from '../database';

class Prompt extends Model {
  public id!: number;
  public topic!: string;
  public weeks!: number;
  public nextWeeks!: number;
  public response!: string;
  public createdAt!: Date;
}

Prompt.init(
  {
    topic: { type: DataTypes.STRING, allowNull: false },
    weeks: { type: DataTypes.INTEGER, allowNull: false },
    nextWeeks: { type: DataTypes.INTEGER, allowNull: false },
    response: { type: DataTypes.TEXT, allowNull: false },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'prompts',
  },
);

export default Prompt;
