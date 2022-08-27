const router = require('express').Router();
const { Comment, Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    console.log(req.session);
  try {
    const newComment = await Comment.create({
      ...req.body,
      name: req.session.name,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.get('/', async (req, res) => {
  try {
    const newComment = await Comment.findAll({ include: [{ model: Post }],});
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.put('/', withAuth, async (req, res) => {
    console.log(req.session);
  try {
    const newComment = await Comment.update({
      ...req.body,
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const CommentData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!CommentData) {
      res.status(404).json({ message: 'No Comment found with this id!' });
      return;
    }

    res.status(200).json(CommentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
