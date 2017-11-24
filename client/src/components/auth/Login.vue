<template>
<div>
  <t-section-title title="Login" ></t-section-title>
  <section class="main">
    <div class="block">
      <div class="line">
        <div class="md-8 md-offset-2">
          <div class="form-container">
            <label for="email">E-mail</label>
            <input type="email" name="email" id="email" v-model="email" @keyup.enter="login">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" v-model="password" @keyup.enter="login">
            <button type="submit" @click="login">Login</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import LoginService from '@/services/LoginService'
import TSectionTitle from '@/components/includes/TSectionTitle'
import Home from '@/components/Home'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
    }
  },
  components: {
    TSectionTitle,
    Home,
  },
  methods: {
    async login() {
      try {
        const logindata = {
          email: this.email,
          password: this.password,
        }
        const response = await LoginService.login(logindata)
        const t = response.data.id
        const u = response.data.userId
        this.$store.dispatch('setTokenAct', t)
        this.$store.dispatch('setUserAct', u)
        this.email = ''
        this.password = ''
        this.$router.push({ name: 'Home' })
        // eslint-disable-next-line
        alert(this.$store.state.token)
      } catch (error) {
        // eslint-disable-next-line
        console.log(error)
      }
    },
  },
}
</script>

<style>

</style>
