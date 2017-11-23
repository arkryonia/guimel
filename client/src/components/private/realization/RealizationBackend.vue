<template>
  <div>
    <section class="main">
      <div class="block">
        <div class="md-10 md-offset-1">
          <div class="line">
            <div class="list categories">
              <ul>
                <li>tous les Projets</li>
                <li v-for="r in reals" :key="r.id">
                  {{r.label}} -- {{r.description}}
                  <router-link :to="{name:'RealizationUpdate', params:{id: `${r.id}` } }" class="moreButton" > Modifier </router-link>
                  <button @click="removeCat(r.id)" class="moreButton fr" > Supprimer </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
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