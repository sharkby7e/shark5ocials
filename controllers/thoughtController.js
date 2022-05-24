const { User, Thought } = require("../models");

module.exports = {
  // getThoughts,
  async getThoughts(req, res) {
    const thoughts = await Thought.find();
    !thoughts ? res.status(500).json(err) : res.json(thoughts);
  },

  // getOneThought,
  async getOneThought(req, res) {
    try {
      const tht = await Thought.findOne({ _id: req.params.thoughtId }).select({
        __v: 0,
      });
      res.json(tht);
    } catch (err) {
      res.status(404).json("No Thought Found with Given Id");
    }
  },

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
        ? res.status(404).json({
            thought: newThought,
            message: "Thought added, but username not found",
          })
        : res.json(newThought);
    }
  },

  // deleteThought,
  async deleteThought(req, res) {
    try {
      const delTht = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });
      await User.findOneAndUpdate(
        { username: delTht.username },
        { $pull: { thoughts: req.params.thoughtId } },
        { new: true }
      );
      res.json({
        deleted: delTht,
        message: "Thought Deleted from DB and associated User",
      });
    } catch (err) {
      res.status(404).json({ err, message: "No Thought found with that Id" });
    }
  },

  // updateThought,
  async updateThought(req, res) {
    try {
      const upTht = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      res
        .status(200)
        .json({ message: `Thought updated`, updatedThought: upTht });
    } catch (err) {
      res.status(404).json({ err, message: "No Thought found with that Id" });
    }
  },

  // addReaction,
  async addReaction(req, res) {},

  // deleteReaction,
  async deleteReaction(req, res) {},
};
