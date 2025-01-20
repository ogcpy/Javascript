document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("userForm");
    const email = document.getElementById("email");
    const country = document.getElementById("country");
    const zip = document.getElementById("zip");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const successMessage = document.getElementById("successMessage");
  
    const emailError = document.getElementById("emailError");
    const countryError = document.getElementById("countryError");
    const zipError = document.getElementById("zipError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
  
    // Helper function to show error
    const showError = (input, message, errorElement) => {
      input.classList.add("invalid");
      errorElement.textContent = message;
    };
  
    // Helper function to clear error
    const clearError = (input, errorElement) => {
      input.classList.remove("invalid");
      errorElement.textContent = "";
    };
  
    // Validation logic
    const validateEmail = () => {
      if (!email.validity.valid) {
        showError(email, "Please enter a valid email.", emailError);
      } else {
        clearError(email, emailError);
      }
    };
  
    const validateCountry = () => {
      if (country.value.trim() === "") {
        showError(country, "Country cannot be empty.", countryError);
      } else {
        clearError(country, countryError);
      }
    };
  
    const validateZip = () => {
      const zipPattern = /^\d{5}$/; // 5-digit zip code
      if (!zipPattern.test(zip.value)) {
        showError(zip, "Zip code must be 5 digits.", zipError);
      } else {
        clearError(zip, zipError);
      }
    };
  
    const validatePassword = () => {
      if (password.value.length < 8) {
        showError(password, "Password must be at least 8 characters.", passwordError);
      } else {
        clearError(password, passwordError);
      }
    };
  
    const validateConfirmPassword = () => {
      if (confirmPassword.value !== password.value) {
        showError(confirmPassword, "Passwords do not match.", confirmPasswordError);
      } else {
        clearError(confirmPassword, confirmPasswordError);
      }
    };
  
    // Add event listeners for live validation
    email.addEventListener("input", validateEmail);
    country.addEventListener("input", validateCountry);
    zip.addEventListener("input", validateZip);
    password.addEventListener("input", validatePassword);
    confirmPassword.addEventListener("input", validateConfirmPassword);
  
    // Form submission
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent actual submission
  
      // Run all validations
      validateEmail();
      validateCountry();
      validateZip();
      validatePassword();
      validateConfirmPassword();
  
      // Check for any errors
      if (
        email.validity.valid &&
        country.value.trim() !== "" &&
        /^\d{5}$/.test(zip.value) &&
        password.value.length >= 8 &&
        confirmPassword.value === password.value
      ) {
        successMessage.textContent = "High five! Form submitted successfully!";
        form.reset();
      } else {
        successMessage.textContent = ""; // Clear success message
      }
    });
  });
  