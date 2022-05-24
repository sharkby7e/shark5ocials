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
    try {
      const nwUser = await User.create(req.body);
      res.json({
        user: nwUser,
        message: `New user ${req.body.username} created!`,
      });
    } catch (err) {
      res
        .status(500)
        .json({ err, message: "Please use unique email and Username" });
    }
  },

  // deleteUser,
  async deleteUser(req, res) {
    try {
      const delUsr = await User.findOneAndDelete({
        _id: req.params.userId,
      });
      console.log(delUsr.username);
      await Thought.deleteMany({ username: delUsr.username });
      res.json({
        user: delUsr,
        message: "User and associated Thoughts Deleted",
      });
    } catch (err) {
      res.status(500).json({ err, message: "No user found with that Id" });
    }
  },

  // updateUser,
  async updateUser(req, res) {},

  // addFriend,
  async addFriend(req, res) {},

  // deleteFriend,
  async deleteFriend(req, res) {},
};
