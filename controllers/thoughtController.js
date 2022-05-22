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
    !newThought ? res.status(500).json(err) : res.json(newThought);
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
