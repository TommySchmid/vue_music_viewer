<template>
  <div>
    <div class="underline">
      Select a user account and login to add to your Ultimate Music List
    </div>
    <div id="names">
      <div @click="kaylaClick" :class="{ underline: users.kayla }">Kayla</div>
      <div @click="melissaClick" :class="{ underline: users.melissa }">
        Melissa
      </div>
      <div @click="johnClick" :class="{ underline: users.john }">John</div>
      <div @click="mikeClick" :class="{ underline: users.mike }">Mike</div>
      <div @click="rachaelClick" :class="{ underline: users.rachael }">
        Rachael
      </div>
      <div @click="tommyClick" :class="{ underline: users.tommy }">Tommy</div>
    </div>
    <div @click="logoutHandler">
      Logout
    </div>
    <AuthForm :userAPIKey="this.userAPIKey"/>
  </div>
</template>

<script>
import AuthForm from './AuthForm.vue';

export default {
  name: "AuthUserSelector",
  components: {
    AuthForm
  },
  data() {
    return {
      users: {
        kayla: false,
        melissa: false,
        john: false,
        mike: false,
        rachael: false,
        tommy: false,
      },
      userAPIKey: "",
      underline: false,
    };
  },
  methods: {
    kaylaClick() {
      this.userAPIKey = "AIzaSyAfJNzVSMDOzQwC_Nv0hF1R20kuOA4TFS8";
      this.users = {
        kayla: true,
        melissa: false,
        john: false,
        mike: false,
        rachael: false,
        tommy: false,
      };
    },
    melissaClick() {
      this.userAPIKey = "AIzaSyCIA3adaEPyTeZlf5aWMg2cSkM9ZdTUFw0";
      this.users = {
        kayla: false,
        melissa: true,
        john: false,
        mike: false,
        rachael: false,
        tommy: false,
      };
    },
    johnClick() {
      this.userAPIKey = "AIzaSyAzxbJEg4PBHqadk_-WF87yT9YR_90EXOI";
      this.users = {
        kayla: false,
        melissa: false,
        john: true,
        mike: false,
        rachael: false,
        tommy: false,
      };
    },
    mikeClick() {
      this.userAPIKey = "AIzaSyC2-L5gejh9_qLQ3X7CblGlditXxvvzdYg";
      this.users = {
        kayla: false,
        melissa: false,
        john: false,
        mike: true,
        rachael: false,
        tommy: false,
      };
    },
    rachaelClick() {
      this.userAPIKey = "AIzaSyARiUDS86UhWMg8Pch0sx0aPjMUZG2QPi4";
      this.users = {
        kayla: false,
        melissa: false,
        john: false,
        mike: false,
        rachael: true,
        tommy: false,
      };
    },
    tommyClick() {
      this.userAPIKey = "AIzaSyAJjU5uOtq8Db_PY4p3QviOR-DAxSA_LLE";
      this.users = {
        kayla: false,
        melissa: false,
        john: false,
        mike: false,
        rachael: false,
        tommy: true,
      };
    },
    logoutHandler() {
      localStorage.removeItem('idToken');
    }
  },
};
</script>

<style scoped>
#names {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#names div {
  margin: 5px;
  cursor: pointer;
}

.underline {
  text-decoration: underline;
}
</style>