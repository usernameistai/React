const express = require('express');
const router = express.Router();

// @route   GET api/prolie/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Profiles works' }));
// res.json like res.send, serves json auto serves status 200 = okay

module.exports = router;