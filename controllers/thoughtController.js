const { Thought, User } = require('../models');

const thoughtController = {
  // GET all thoughts
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // GET a single thought by its _id
  async getThoughtById(req, res) {
    try {
      const thought = await Thought.findById(req.params.id);
      if (!thought) {
        return res.status(404).json({ message: 'No thought found with this id!' });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // POST to create a new thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findByIdAndUpdate(
        req.body.userId,
        { $push: { thoughts: thought._id } },
        { new: true }
      );
      res.json(thought);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // PUT to update a thought by its _id
  async updateThought(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!thought) {
        return res.status(404).json({ message: 'No thought found with this id!' });
      }
      res.json(thought);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // DELETE to remove a thought by its _id
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findByIdAndRemove(req.params.id);
      if (!thought) {
        return res.status(404).json({ message: 'No thought found with this id!' });
      }
      await User.findByIdAndUpdate(
        thought.userId,
        { $pull: { thoughts: req.params.id } }
      );
      res.json({ message: 'Thought deleted successfully' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // POST to create a reaction stored in a single thought's reactions array field
  async addReaction(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $push: { reactions: req.body } },
        { new: true, runValidators: true }
      );
      if (!thought) {
        return res.status(404).json({ message: 'No thought found with this id!' });
      }
      res.json(thought);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // DELETE to pull and remove a reaction by the reaction's reactionId value
  async removeReaction(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
      );
      if (!thought) {
        return res.status(404).json({ message: 'No thought found with this id!' });
      }
      res.json(thought);
    } catch (err) {
      res.status(400).json(err);
    }
  }
};

module.exports = thoughtController;