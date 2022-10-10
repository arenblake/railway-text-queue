/**
 * Defines the router for reservation resources.
 *
 * @type {Router}
 */

const router = require("express").Router();
const controller = require("./submissions.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.list).all(methodNotAllowed);
router
  .route("/:id")
  .get(controller.read)
  .put(controller.update)
  .all(methodNotAllowed);

module.exports = router;
