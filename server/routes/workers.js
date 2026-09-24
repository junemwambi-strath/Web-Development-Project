const express = require('express');
const router = express.Router();
const db = require('../db');

// GET /workers?jobType=electrician&location=...
router.get('/', async (req, res) => {
  const { jobType, location } = req.query;
  if (!jobType || !location) {
    return res.status(400).json({
      code: 'INVALID_PARAMS',
      message: 'jobType and location are required query parameters',
    });
  }
  try {
    const [rows] = await db.query(
      'SELECT id, name, job_type AS jobType, location, rating, rate_per_hour AS ratePerHour FROM workers WHERE job_type = ? AND location LIKE ?',
      [jobType, `%${location}%`]
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ code: 'SERVER_ERROR', message: 'Failed to fetch workers' });
  }
});

// GET /workers  (jobType and location are now optional filters)
router.get('/', async (req, res) => {
  const { jobType, location } = req.query;

  let query = 'SELECT id, name, job_type AS jobType, location, rating, rate_per_hour AS ratePerHour FROM workers WHERE 1=1';
  const params = [];

  if (jobType) {
    query += ' AND job_type = ?';
    params.push(jobType);
  }
  if (location) {
    query += ' AND location LIKE ?';
    params.push(`%${location}%`);
  }

  try {
    const [rows] = await db.query(query, params);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ code: 'SERVER_ERROR', message: 'Failed to fetch workers' });
  }
});

module.exports = router;