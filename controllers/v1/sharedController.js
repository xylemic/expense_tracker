// @desc get health check
// @route GET /health
// @access Public
const healthCheckHandler = (req, res) => {
  res.status(200).json({
    status: 'OK'
  });
};

module.exports = {healthCheckHandler};
