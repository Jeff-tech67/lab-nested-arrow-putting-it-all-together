


// module.exports = {
//   ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
// };


// Step 1: Define the outer function
function createLoginTracker(userInfo) {
    // initialize attempt counter
    let attemptCount = 0;

    // Step 2: Define and return the inner arrow function
    const attemptLogin = (passwordAttempt) => {
        // increment attempts every time function is called
        attemptCount++;

        // If attempts exceed 3 ,lock account
        if (attemptCount > 3) {
            return "Account locked due to too many failed login attempts";
        }

        // Check if entered password matches
        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        } else {
            return `Attempt ${attemptCount}: Login failed`;
        }
    };

    // return the inner function (closure)
    return attemptLogin;
}

const Jeff = createLoginTracker({
    username: "Jeff",
    password: "12345678"
    
  });

  console.log(Jeff("helloworld"));
  console.log(Jeff("kjbilhb"))
  console.log(Jeff("12345678"))
  console.log(Jeff("kyky"))