const express = require('express');
const router = express.Router();

// @route   GET api/users/test
// @desc    Tests user route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users works' }));
// res.json like res.send, serves json auto serves status 200 = okay

module.exports = router;