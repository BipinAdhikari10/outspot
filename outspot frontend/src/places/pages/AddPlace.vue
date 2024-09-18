<template>
  <div class="add-place-form">
    <div class="form-wrapper">
      <div class="form-container">
        <h2 class="text-center mb-4">Add New Place</h2>
        <ValidationObserver ref="form">
          <form id="submissionForm" @submit.prevent="submitHandler">
            <div class="form-group mb-3">
              <ValidationProvider v-slot="{ errors }" rules="required|min:6">
                <label for="title" class="form-label">Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="formData.title"
                  placeholder="Enter title"
                />
                <span class="error-message">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group mb-3">
              <ValidationProvider v-slot="{ errors }" rules="required">
                <label for="description" class="form-label">Description</label>
                <textarea
                  class="form-control"
                  id="description"
                  v-model="formData.description"
                  rows="3"
                  placeholder="Enter description"
                ></textarea>
                <span class="error-message">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <ValidationProvider v-slot="{ errors }" rules="required">
              <div class="form-group mb-5">
                <label for="address" class="form-label">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  v-model="formData.address"
                  placeholder="Enter address"
                />
              </div>
              <span style="margin-top: -50px" class="error-message">{{
                errors[0]
              }}</span>
            </ValidationProvider>

            <div class="form-group mt-3 mb-3">
              <label for="image" class="form-label">Upload Image</label>
              <input
                type="file"
                class="form-control"
                id="image"
                @change="handleImageUpload"
                accept="image/*"
              />
            </div>

            <div style="text-align: center">
              <button type="submit" class="button button--success">
                Submit
              </button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "AddPlace",
  data() {
    return {
      formData: {
        title: "",
        description: "",
        address: "",
        image: null, // Image field to hold the file
      },
    };
  },
  computed: {
    ...mapGetters(["token"]), // Access the token from Vuex store
  },
  methods: {
    submitHandler() {
      this.$refs.form.validate().then((valid) => {
        if (valid) {
          const placeData = new FormData();
          placeData.append("title", this.formData.title);
          placeData.append("description", this.formData.description);
          placeData.append("address", this.formData.address);
          if (this.formData.image) {
            placeData.append("image", this.formData.image);
          }

          // Sending data to the backend API with Authorization header
          axios
            .post("http://localhost:5000/spots/add", placeData, {
              headers: {
                Authorization: `Bearer ${this.token}`, // Attach Bearer token from Vuex store
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
              console.log("Place added successfully", response.data);
              this.resetForm();
              this.$router.push("/"); // Redirect to homepage or desired route
            })
            .catch((error) => {
              console.error("Error adding place:", error);
            });
        } else {
          console.log("Form is not valid");
        }
      });
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      this.formData.image = file; // Assign the selected image to formData
    },
    resetForm() {
      this.formData.title = "";
      this.formData.description = "";
      this.formData.address = "";
      this.formData.image = null; // Reset image field
      // Reset file input manually
      document.getElementById("image").value = "";
      this.$refs.form.reset();
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
