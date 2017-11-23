<template>
  <div id="app">
    <t-header></t-header>
    <router-view></router-view>
    <t-footer></t-footer>
  </div>
</template>

<script>
import THeader from '@/components/includes/THeader'
import TSectionTitle from '@/components/includes/TSectionTitle'
import TFooter from '@/components/includes/TFooter'
import Spinner from 'vue-simple-spinner'

export default {
  name: 'app',
  components: {
    THeader,
    TSectionTitle,
    TFooter,
    Spinner,
  },
  data() {
    return {
      user: [],
    }
  },
  async mounted() {
    this.user = this.$store.state.user
    // eslint-disable-next-line
    try {
      const response = await this.user
      this.user = response.data
    } catch (err) {
      // eslint-disable-next-line
      // this.$router.push({ name: 'Home' })
    }
  },
}
</script>

<style>
  @import url('../static/css/prism.css');
  @import url('../static/css/main.css');
</style>
