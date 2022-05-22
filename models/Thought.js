const { Schema, Types, Model, model } = require("mongoose");
const reactionSchema = require("./Reaction");

const thoughtSchema = newSchema({});

const Thought = model("thought", thoughtSchema);

module.exporst = Thought;
