
module.exports = {
  users: ( parent, args, { models }) => {
    return models.User.find()
  }
}