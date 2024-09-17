<template>
  <div class="user-auth-form">
    <div class="form-wrapper">
      <div class="form-container">
        <h2 class="text-center mb-4">{{ isLogin ? "Login" : "Register" }}</h2>
        <ValidationObserver ref="form">
          <form id="authForm" @submit.prevent="submitHandler">
            <!-- Name field (only for registration) -->
            <div v-if="!isLogin" class="form-group mb-3">
              <ValidationProvider v-slot="{ errors }" rules="required|min:3">
                <label for="name" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="formData.fullName"
                  placeholder="Enter your name"
                />
                <span class="error-message">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>

            <!-- Email field (for both login and register) -->
            <div class="form-group mb-3">
              <ValidationProvider v-slot="{ errors }" rules="required|email">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="formData.email"
                  placeholder="Enter your email"
                />
                <span class="error-message">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>

            <!-- Password field (for both login and register) -->
            <div class="form-group mb-3">
              <ValidationProvider v-slot="{ errors }" rules="required|min:6">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="formData.password"
                  placeholder="Enter your password"
                />
                <span class="error-message">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>

            <!-- Submit button -->
            <div style="text-align: center">
              <button type="submit" class="button button--success">
                {{ isLogin ? "Login" : "Register" }}
              </button>
            </div>
          </form>
        </ValidationObserver>

        <!-- Switch between Login and Register -->
        <div class="text-center mt-4">
          <button @click="toggleAuthMode" class="btn-switch-mode">
            {{ isLogin ? "Switch to Register" : "Switch to Login" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import router from "@/router"; // Assuming Vue Router is set up

export default {
  name: "UserAuthentication",
  data() {
    return {
      formData: {
        fullName: "",
        email: "",
        password: "",
      },
      isLogin: false, // false = Register mode, true = Login mode
    };
  },
  methods: {
    submitHandler() {
      this.$refs.form.validate().then((valid) => {
        if (valid) {
          const apiUrl = this.isLogin
            ? "http://localhost:5000/users/login"
            : "http://localhost:5000/users/register";

          axios
            .post(apiUrl, this.formData)
            .then((response) => {
              if (this.isLogin) {
                const { token, userId, userName } = response.data;
                this.$store.commit("setUserData", { token, userId, userName });
                this.$router.push("/"); // Redirect to homepage after login
              } else {
                console.log("Registered successfully");
                this.$router.push("/places/new"); // Optional: Redirect to login after registration
              }
            })
            .catch((error) => {
              console.error("Error during login/register:", error);
            });

          this.resetForm();
        } else {
          console.log("Form is not valid");
        }
      });
    },

    resetForm() {
      this.formData = {
        fullName: "",
        email: "",
        password: "",
      };
      this.$refs.form.reset(); // Reset form after submission or mode switch
    },

    toggleAuthMode() {
      this.isLogin = !this.isLogin;
      this.resetForm();
    },
  },
};
</script>

<style>
/* Full-screen background with form centering */
.form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.form-container {
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  width: 100%;
}

h2 {
  font-weight: 600;
  color: #333;
}

/* Form group layout - label and input separation */
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.form-label {
  font-weight: 600;
  margin-bottom: 8px;
  color: #555;
}

.form-control {
  padding: 14px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #ccc;
  transition: border-color 0.3s;
}

.form-control:focus {
  border-color: #007bff;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.25);
}

/* Input placeholders */
input::placeholder,
textarea::placeholder {
  color: #aaa;
  font-style: italic;
}

.error-message {
  color: red;
  display: block;
}

.btn-switch-mode {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.btn-switch-mode:hover {
  background-color: #0056b3;
}

.text-center {
  text-align: center;
}

.mt-4 {
  margin-top: 1.5rem;
}

/* Form Container Responsiveness */
@media (max-width: 576px) {
  .form-container {
    padding: 20px;
  }

  h2 {
    font-size: 1.5rem;
  }
}
</style>
