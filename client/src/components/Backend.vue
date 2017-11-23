<template>
  <div>
    <section id="title" class="backend">
      <div class="block stretchLeft">
        <div class="line">
          <div class="md-10 md-offset-1">
            <div class="name"> Backend </div>
            <hr class="titleHr">
            <ul>
              <li><router-link :to="{name:'CategoryAdd' }" > Add Category </router-link></li>
              <li><router-link :to="{name:'CategoryBackend' }" > All Categories </router-link></li>
              <li><router-link :to="{name:'PostAdd' }" > Add Post </router-link></li>
              <li><router-link :to="{name:'PostBackend' }" > All Posts </router-link></li>
              <li><router-link :to="{name:'ProjectAdd' }" > Add Projects </router-link></li>
              <li><router-link :to="{name:'ProjectBackend' }" > All Projects </router-link></li>
              <li><router-link :to="{name:'RealizationAdd' }" > Add Realisations </router-link></li>
              <li><router-link :to="{name:'RealizationBackend' }" > All Realisations </router-link></li>
              <button v-show="isLoggedIn()" @click="Logout"> Logout </button>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <router-view></router-view>
  </div>
</template>
<script>
  import TSectionTitle from '@/components/includes/TSectionTitle'
  
  export default {
    components: {
      TSectionTitle,
    },
    data() {
      return {
        name: '',
        description: '',
      }
    },
    methods: {
      Logout() {
        this.$store.dispatch('setTokenAct', '')
        this.$store.dispatch('setUserAct', '')
        this.$router.push({ name: 'Login' })
      },
      isLoggedIn() {
        return this.$store.state.isUserLoggedIn
      },
    },
  }
</script>

<style>

</style>