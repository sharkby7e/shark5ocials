const { User, Thought } = require("../models");

module.exports = {
  // getThoughts,
  async getThoughts(req, res) {
    const thoughts = await Thought.find();
    !thoughts ? res.status(500).json(err) : res.json(thoughts);
  },

  // getOneThought,
  async getOneThought(req, res) {},

  // newThought,
  async newThought(req, res) {
    const newThought = await Thought.create(req.body);

    if (!newThought) {
      res.status(500).json(err);
    } else {
      const upUser = await User.findOneAndUpdate(
        { username: req.body.username },
        { $addToSet: { thoughts: newThought._id } },
        { runValidators: true, new: true }
      );
      !upUser
        ? res
            .status(404)
            .json({
              thought: newThought,
              message: "Thought added, but username not found",
            })
        : res.json(newThought);
    }
  },

  // deleteThought,
  async deleteThought(req, res) {},

  // updateThought,
  async updateThought(req, res) {},

  // addReaction,
  async addReaction(req, res) {},

  // deleteReaction,
  async deleteReaction(req, res) {},
};
