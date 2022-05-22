const { User, Thought } = require("../models");

module.exports = {
  // getUsers,
  async getUsers(req, res) {
    const users = await User.find();
    !users ? res.status(500).json(err) : res.json(users);
  },

  // getOneUser,
  async getOneUser(req, res) {
    const usr = await User.findOne({ _id: req.params.userId })
      .select({ __v: 0 })
      .populate({ path: "thoughts", select: { __v: 0, username: 0 } })
      .populate({ path: "friends" });
    !usr ? res.status(404).json("No User Found") : res.json(usr);
  },

  // newUser,
  async newUser(req, res) {
    const nwUser = await User.create(req.body);
    !nwUser
      ? res.status(500).json(err)
      : res.json({
          user: nwUser,
          message: `New user ${req.body.username} created`,
        });
  },

  // deleteUser,
  async deleteUser(req, res) {},

  // updateUser,
  async updateUser(req, res) {},

  // addFriend,
  async addFriend(req, res) {},

  // deleteFriend,
  async deleteFriend(req, res) {},
};
