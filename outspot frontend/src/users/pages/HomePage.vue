<template>
  <div>
    <UserList :users="users" />
  </div>
</template>

<script>
import UserList from "../components/UserList.vue";
export default {
  name: "HomePage",
  components: {
    UserList,
  },
  data() {
    return {
      message: "This is home component",
      users: [
        // {
        //   id: "u1",
        //   name: "Max Schwarz",
        //   image:
        //     "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        //   places: 3,
        // },
        // {
        //   id: "u2",
        //   name: "MSP",
        //   image:
        //     "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        //   places: 1,
        // },
      ],
    };
  },
  props: {},
  methods: {},
};
</script>

<style></style>
