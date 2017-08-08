module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        content: {
            type: DataTypes.STRING,
            allowNull: true
        },

        upvotes: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0
        }
    });

    Post.associate = (models) => {
        Post.hasMany(models.Comment, {
            foreignKey: 'postId',
            as: 'comments'
        });
    };

    Post.associate = function(models) {
        Post.belongsTo(models.User, {
            foreignKey: 'userId',
            onDelete: 'CASCADE'
        });
    };

    return Post;
};
