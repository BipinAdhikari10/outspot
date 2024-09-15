<template>
  <div>
    <ul class="users-list">
      <CardComponent
        :myStyle="{
          padding: '20px 30px',
          fontSize: '40px',
          marginTop: '100px',
        }"
        v-if="users.length < 1"
      >
        <li style="text-align: center">No data found</li>
        <button class="button-redirect" @click="clickHandler">Add Place</button>
      </CardComponent>

      <template v-else>
        <li v-for="user in users" :key="user.id" class="user-item">
          <CardComponent className="user-item__content">
            <router-link :to="`/users/${user.id}`">
              <div class="user-item__image">
                <ImageUpload :ImageSrc="user.image" :altText="user.name" />
              </div>
              <div class="user-item__info">
                <h2>{{ user.name }}</h2>
                <h3>
                  {{ user.places }} {{ user.places > 1 ? "places" : "place" }}
                </h3>
              </div>
            </router-link>
          </CardComponent>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import ImageUpload from "@/shared/ui/ImageUpload.vue";
import CardComponent from "@/shared/ui/CardComponent.vue";

export default {
  name: "UserList",
  components: {
    ImageUpload,
    CardComponent,
  },
  data() {
    return {
      message: "This is user list",
    };
  },
  props: {
    users: Array,
  },
  methods: {
    clickHandler() {
      this.$router.push("/places/new");
    },
  },
};
</script>

<style>
.users-list {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  width: 90%;
  max-width: 50rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
  gap: 50px;
  border: 2px solid white;
}
.user-item {
  margin: 1rem;
  width: calc(45% - 2rem);
  min-width: 17.5rem;
}

.user-item a {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  padding: 1rem;
  color: white;
  background: #292929;
}

.user-item a:hover,
.user-item a:active {
  background: #ffd900;
}

.user-item__content {
  padding: 0;
}

.user-item__image {
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
}

.user-item__info h2 {
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  font-weight: normal;
  color: #ffd900;
}

.user-item:hover h2,
.user-item:active h2,
.user-item:hover h3,
.user-item:active h3 {
  color: #292929;
}

.user-item__info h3 {
  margin: 0;
}

.user-item {
  list-style: none;
  margin: 1rem 0;
}

.user-item__content {
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26); */
  border-radius: 6px;
  overflow: hidden;
  text-align: center;
}

.user-item__image img {
  border-radius: 50%;
  width: 50px;
  height: 60px;
  object-fit: cover;
}

.user-item__info h2,
.user-item__info h3 {
  margin: 0.5rem 0;
}
.button-redirect {
  padding: 10px 12px;
  cursor: pointer;
  width: 100%;
  background-color: green;
  color: white;
  outline: none;
  border: none;
  margin: 0 auto;
}
</style>
