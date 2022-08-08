<template>
  <div class="sessionTokenLogin">
    <br/>
    <label>
      Username:
      <input id="username" type="text" v-model="username"/>
      Password:
      <input id="password" type="password" v-model="password"/>
    </label>
    <button id="submit" v-on:click="signIn">Login</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SessionTokenLogin',
  data () {
    return { username: '', password: '' }
  },
  methods: {
    signIn () {
      this.$oktaAuth.signInWithCredentials({
        username: this.username,
        password: this.password
      })
      .then(res =>
        this.$oktaAuth.signInWithRedirect({
          originalUri: '/protected',
          sessionToken: res.sessionToken
        })
      )
      .catch(err => console.error(`Found an error: ${err}`))
    }
  }
})
</script>
