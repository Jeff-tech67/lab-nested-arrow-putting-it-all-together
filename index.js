/**
 * Creates a login tracker for a specific user.
 * Uses closures to keep track of login attempts.
 *
 * @param {Object} userInfo - User credentials
 * @param {string} userInfo.username
 * @param {string} userInfo.password
 * @returns {Function} login attempt handler
 */
const createLoginTracker = (userInfo) => {
  let attemptCount = 0; // tracks login attempts (closure)

  // Inner arrow function
  return (passwordAttempt) => {
    // If account already locked
    if (attemptCount >= 3) {
      return 'Account locked due to too many failed login attempts';
    }

    attemptCount++;

    // Check password
    if (passwordAttempt === userInfo.password) {
      return 'Login successful';
    }

    // Failed attempt (within limit)
    return `Attempt ${attemptCount}: Login failed`;
  };
};

module.exports = {
  createLoginTracker
};
