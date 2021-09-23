<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"> <img src="../assets/shoes.png" alt="" width="40px" height="40px" > Hackshoe</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              @click.prevent="goHome"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" type="button" @click.prevent="goCart">Cart <span
                class="
                  position-absolute
                  start-40
                  translate-middle
                  badge
                  rounded-pill
                  bg-danger
                "
              >
                {{carts}}
                <span class="visually-hidden">unread messages</span>
              </span> </a>
          </li>
        </ul>
        <form class="d-flex">
          <input
            v-model="name"
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            @click.prevent="searchPost"
            class="btn btn-outline-success"
            type="submit"
          >
            Search
          </button>
        </form>
        <a class="nav-link active" @click="LogoutBtn" aria-current="page"
          >Logout</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goCart() {
      this.$router.push("/mycart");
    },
    searchPost() {
      this.$store.commit("FILTERTITLE", this.name);
      this.$store.dispatch("productFetch");
    },
    LogoutBtn() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
  computed:{
    carts(){
      return this.$store.state.carts.length
    }
  }
};
</script>

<style>
</style>