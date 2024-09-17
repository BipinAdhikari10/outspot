<template>
  <header class="main-header">
    <h1 class="main-navigation__title">
      <router-link to="/">OutSpot</router-link>
    </h1>
    <nav class="main-navigation__header-nav">
      <ul class="nav-links">
        <!-- Always show these links -->
        <li>
          <router-link to="/">ALL USERS</router-link>
        </li>

        <!-- Show these links only if the user is authenticated -->
        <li v-if="isAuthenticated" id="my-places">
          <router-link to="/users/1">MY PLACES</router-link>
        </li>
        <li v-if="isAuthenticated" id="add-place">
          <router-link to="/places/new">ADD PLACE</router-link>
        </li>

        <!-- Show this link if the user is NOT authenticated -->
        <li v-if="!isAuthenticated" id="authenticate">
          <router-link to="/auth">AUTHENTICATE</router-link>
        </li>

        <!-- Show this button if the user is authenticated -->
        <li v-if="isAuthenticated" id="logout">
          <button @click="logoutHandler" id="logout-button">LOGOUT</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderNavigation",
  computed: {
    // Access the Vuex store to check if the user is authenticated
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logoutHandler() {
      // Call the Vuex action to log the user out
      this.$store.dispatch("logout");
      this.$router.push("/auth"); // Redirect to the auth page after logout
    },
  },
};
</script>

<style>
.main-header {
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: #ff0055;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
  padding: 0 1rem;
  z-index: 5;
}

main {
  margin-top: 5rem;
}

.main-navigation__menu-btn {
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 2rem;
  cursor: pointer;
}

.main-navigation__menu-btn span {
  display: block;
  width: 3rem;
  height: 2.5px;
  background: white;
}

.main-navigation__title {
  color: white;
}

.main-navigation__title a {
  text-decoration: none;
  color: white;
}

.main-navigation__header-nav {
  display: none;
}

.main-navigation__drawer-nav {
  height: 100%;
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nav-links li {
  margin: 1rem;
}

.nav-links a {
  border: 1px solid transparent;
  color: #292929;
  text-decoration: none;
  padding: 0.5rem;
}

.nav-links a:hover,
.nav-links a:active,
.nav-links a.active {
  background: #f8df00;
  border-color: #292929;
  color: #292929;
}

.nav-links button {
  cursor: pointer;
  border: 1px solid #292929;
  color: #292929;
  background: transparent;
  padding: 0.5rem;
  font: inherit;
}

.nav-links button:focus {
  outline: none;
}

.nav-links button:hover,
.nav-links button:active {
  background: #292929;
  color: white;
}

@media (min-width: 768px) {
  .nav-links {
    flex-direction: row;
  }

  .nav-links li {
    margin: 0 0.5rem;
  }

  .nav-links a {
    color: white;
    text-decoration: none;
  }

  .nav-links button {
    border: 1px solid white;
    color: white;
    background: transparent;
  }

  .nav-links button:hover,
  .nav-links button:active {
    background: #f8df00;
    color: #292929;
  }
}
@media (min-width: 768px) {
  .main-navigation__menu-btn {
    display: none;
  }

  .main-navigation__header-nav {
    display: block;
  }
}

@media (min-width: 768px) {
  .main-header {
    justify-content: space-between;
  }
}
</style>
