<template>
  <div>
    <ul class="place-list">
      <template v-if="items.length < 1">
        <CardComponent> No data found </CardComponent>
      </template>
      <template v-else>
        <li class="place-item">
          <CardComponent
            v-for="place in items"
            :key="place.id"
            class="place-item__content"
          >
            <div class="place-item__image">
              <img :src="place.imageUrl" :alt="place.title" />
            </div>
            <div class="place-item__info">
              <h2>{{ place.title }}</h2>
              <h3>{{ place.address }}</h3>
              <p>{{ place.description }}</p>
            </div>
            <div class="place-item__actions">
              <router-link
                :to="`/places/${place.id}`"
                class="button button--inverse"
              >
                Edit
              </router-link>
              <button
                class="button button--danger"
                @click="deleteHandler(place.id)"
              >
                Delete
              </button>
            </div>
          </CardComponent>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
// import ButtonComponent from "@/shared/ui/ButtonComponent.vue";
import CardComponent from "@/shared/ui/CardComponent.vue";
export default {
  name: "UserPlacesList",

  components: {
    // ButtonComponent,
    CardComponent,
  },
  data() {
    return {};
  },
  props: {
    items: Array,
  },
  methods: {
    editHandler() {
      this.$router.push("/places/new");
    },
    deleteHandler(id) {
      console.log("Deleting id", id);
    },
  },
};
</script>

<style>
.place-list {
  list-style: none;
  margin: 1rem auto;
  padding: 0;
  width: 90%;
  max-width: 40rem;
}

.place-item {
  margin: 1rem 0 !important;
}

.place-item__content {
  padding: 0;
}

.place-item__info {
  padding: 1rem;
  text-align: center;
}

.place-item__image {
  width: 100%;
  height: 12.5rem;
  margin-right: 1.5rem;
}

.place-item__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.place-item__info h2,
.place-item__info h3,
.place-item__info p {
  margin: 0 0 0.5rem 0;
}

.place-item__actions {
  padding: 1rem;
  text-align: center;
  border-top: 1px solid #ccc;
}

.place-item__modal-content {
  padding: 0;
}

.place-item__modal-actions {
  text-align: right;
}

.place-item__actions button,
.place-item__actions a {
  margin: 0.5rem;
}

@media (min-width: 768px) {
  .place-item__image {
    height: 20rem;
  }
}
</style>
