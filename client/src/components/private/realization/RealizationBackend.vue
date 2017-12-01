<template>
  <div>
    <h2 class="backend-title">All realisations</h2>
    <hr class="backend-line">
    <div class="posts">
      <div v-for="r in reals" :key="r.id" class="item">
        <h3> {{r.label}} </h3>
        <p>
          {{r.description}}
        </p>
        <router-link :to="{name:'RealizationUpdate', params:{id: `${r.id}` } }" class="moreButton" > Modifier </router-link>
        <button @click="removeCat(r.id)" class="moreButton fr" > Supprimer </button>
      </div>
    </div>
  </div>
</template>
<script>
  import RealizationService from '@/services/RealizationService'
  import TSectionTitle from '@/components/includes/TSectionTitle'
  
  export default {
    components: {
      TSectionTitle,
    },
    data() {
      return {
        reals: [],
      }
    },
    async mounted() {
      this.reals = await RealizationService.list()
      try {
        const reals = await this.reals
        this.reals = reals.data
      } catch (err) {
        // eslint-disable-next-line
        console.log('Erreur', err)
      }
    },
    methods: {
      async removeCat(category) {
        try {
          const h = {
            Authorization: `${this.$store.state.token}`,
          }
          await RealizationService.delete(category, h)
          this.$router.push({ name: 'Backend' })
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