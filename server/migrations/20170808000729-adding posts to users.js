'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      queryInterface.addColumn(
          'Posts',
          'upvotes',
          {
              type: Sequelize.INTEGER,
              allowNull: false,
              defaultValue: 0
          }
      );

      queryInterface.addColumn(
        'Posts',
        'userId',
        {
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          references: {
              model: 'Users',
              key: 'id',
              as: 'userId'
          }
        }
      );
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
