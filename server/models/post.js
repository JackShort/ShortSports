module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Post.associate = (models) => {
        Post.hasMany(models.Comment, {
            foreignKey: 'commentId',
            as: 'comments'
        });
    };

    return Post;
};
