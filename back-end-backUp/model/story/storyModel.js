const Sequelize = require('sequelize');
const baseModule = require('../baseModel');

class storyModel extends baseModule {
  constructor () {
    super('banner', {
      storyId: {
				type: Sequelize.INTEGER(50),
				primaryKey: true,
				autoIncrement: true
      },
      title: Sequelize.STRING(50),
      desc: Sequelize.STRING(50),
      imgUrl: Sequelize.STRING(100),
      relate_type: Sequelize.STRING(50),
      relate_goods: Sequelize.STRING,
      is_top: Sequelize.BOOLEAN,
    },
    {
      freezeTableName: true, // 禁止修改表名
    })
    this.model = super.getModel()
		this.model.sync()
  }
};

module.exports = new storyModel();