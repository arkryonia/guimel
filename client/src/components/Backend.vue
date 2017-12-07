<template>
  <div>
    <section id="title" class="backend">
      <div class="block stretchLeft">
        <div class="line">
          <div class="md-10 md-offset-1">
            <div class="name"> Backend </div>
            <hr class="titleHr">
            <ul>
              <button v-show="isLoggedIn()" @click="Logout"> Logout </button>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="main">
      <div class="block">
        <div class="md-10  md-offset-1">
          <div class="line">
            <div class="md-4">
              <div class="aside">
                <ul>
                  <li><router-link :to="{name:'CategoryAdd' }" > Add Category <span class="fr">&raquo;</span> </router-link></li>
                  <li><router-link :to="{name:'CategoryBackend' }" > All Categories <span class="fr">&raquo;</span> </router-link></li>
                  <li><router-link :to="{name:'PostAdd' }" > Add Post <span class="fr">&raquo;</span> </router-link></li>
                  <li><router-link :to="{name:'PostBackend' }" > All Posts <span class="fr">&raquo;</span> </router-link></li>
                  <li><router-link :to="{name:'ProjectAdd' }" > Add Projects <span class="fr">&raquo;</span> </router-link></li>
                  <li><router-link :to="{name:'ProjectBackend' }" > All Projects <span class="fr">&raquo;</span> </router-link></li>
                  <li><router-link :to="{name:'RealizationAdd' }" > Add Realisations <span class="fr">&raquo;</span> </router-link></li>
                  <li><router-link :to="{name:'RealizationBackend' }" > All Realisations <span class="fr">&raquo;</span> </router-link></li>
                </ul>
              </div>
              <!-- lol -->
            </div>
            <div class="md-8">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </section>
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