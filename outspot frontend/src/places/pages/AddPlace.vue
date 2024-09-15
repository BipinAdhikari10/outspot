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
              <div class="form-group mb-3">
                <label for="address" class="form-label">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  v-model="formData.address"
                  placeholder="Enter address"
                />
              </div>
              <span class="error-message">{{ errors[0] }}</span>
            </ValidationProvider>

            <div class="form-group mb-3">
              <label for="image" class="form-label">Upload Image</label>
              <input type="file" class="form-control" id="image" />
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
// import CardComponent from "@/shared/ui/CardComponent.vue";

export default {
  name: "AddPlace",
  components: {
    // CardComponent,
  },
  data() {
    return {
      formData: {
        title: "",
        description: "",
        address: "",
        image: "",
      },
    };
  },
  props: {},
  methods: {
    submitHandler() {
      this.$refs.form.validate().then((valid) => {
        if (valid) {
          console.log(this.formData);
        } else {
          console.log("Form is not valid");
        }
      });
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
