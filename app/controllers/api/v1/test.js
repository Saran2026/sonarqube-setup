const express = require('express'),
  router = express.Router();

router.get('/', (req, res) => {
  const result = {};
  const tempvar = 'This is unused varaiable and needs to be reported by saonrscan';
  result.empId = 'EMP-123';
  result.empName = 'John';
  res.status(200).json({ success: true, data: result });
});

module.exports = router;

