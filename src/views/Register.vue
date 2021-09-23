<template>
  <section>
    <form
      v-on:submit.prevent="registerButton"
      id="register"
      class="form-container container"
    >
      <h1 style="text-align: center">Register</h1>
      <div class="form">
        <div class="mb-3">
          <label for="inputUsername" class="form-label">First Name</label>
          <input
            v-model="user.firstName"
            type="text"
            name="username"
            class="form-control"
            id="inputUsername"
          />
        </div>
        <div class="mb-3">
          <label for="inputUsername" class="form-label">Last Name</label>
          <input
            v-model="user.lastName"
            type="text"
            name="username"
            class="form-control"
            id="inputUsername"
          />
        </div>
        <div class="mb-3">
          <label for="inputEmail" class="form-label">Email</label>
          <input
            v-model="user.email"
            type="email"
            name="email"
            class="form-control"
            id="inputEmail"
          />
        </div>
        <div class="mb-3">
          <label for="inputPassword" class="form-label">Password</label>
          <input
            v-model="user.password"
            type="text"
            name="password"
            class="form-control"
            id="inputPassword"
          />
        </div>
      </div>
      <div>
        <div class="mb-3">
          <label for="phoneNumber" class="form-label">Phone Number</label>
          <input
            v-model="user.phoneNumber"
            type="text"
            name="phoneNumber"
            class="form-control"
            id="inputPhoneNumber"
          />
        </div>
      </div>
      <div class="form">
        <button type="submit" class="btn btn-warning mr-5">Register</button>
        <a href="/login">
          <button type="button" class="back-btn btn btn-danger">Cancel</button>
        </a>
      </div>
    </form>
  </section>
</template>

<script>
import axios from "../axios/server";
import swal from "sweetalert"
export default {
  name: "register",
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
      },
    };
  },
  methods: {
    registerButton() {
      axios({
        url: "/register",
        method: "post",
        data: {
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
          password: this.user.password,
          phoneNumber: this.user.phoneNumber,
        },
      })
      .then(()=>{
          swal({
            title: "Good job!",
            text: "You have been registered",
            icon: "success",
          });
          this.$router.push('/login')
        })
        .catch((err)=>{
          swal({
            title: `${err.response.status}`,
            text: `${err.response.data[0]}`,
            icon: "error",
          });
          console.log(err.response)
        })
    },
  },
};
</script>

<style>
</style>