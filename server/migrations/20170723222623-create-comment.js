module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      postId: {
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          references: {
              model: 'Posts',
              key: 'id',
              as: 'postId'
          }
      }
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Comments')
};
