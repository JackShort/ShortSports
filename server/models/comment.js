module.exports = (sequelize, DataTypes) => {
    var Comment = sequelize.define('Comment', {
        content: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Comment.associate = (models) => {
        Comment.belongsTo(models.Post, {
            foreignKey: 'postId',
            onDelete: 'CASCADE'
        });
    };

    return Comment;
};
