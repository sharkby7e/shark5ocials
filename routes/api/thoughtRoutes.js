const router = require("express").Router();

const {
  getThoughts,
  getOneThought,
  newThought,
  deleteThought,
  updateThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts).post(newThought);

router
  .route("/:thoughtId")
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction).delete(deleteReaction);

module.exports = router;
