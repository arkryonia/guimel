<template>
  <div>
    <section class="main">
      <div class="block">
        <div class="md-10 md-offset-1">
          <div class="line">
            <div class="list categories">
              <ul>
                <li>tous les Projets</li>
                <li v-for="p in projects" :key="p.id">
                  {{p.name}} -- {{p.description}}
                  <router-link :to="{name:'ProjectUpdate', params:{id: `${p.id}` } }" class="moreButton" > Modifier </router-link>
                  <button @click="removeCat(p.id)" class="moreButton fr" > Supprimer </button>
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
  import ProjectService from '@/services/ProjectService'
  import TSectionTitle from '@/components/includes/TSectionTitle'
  
  export default {
    components: {
      TSectionTitle,
    },
    data() {
      return {
        projects: [],
      }
    },
    async mounted() {
      this.projects = await ProjectService.list()
      try {
        const projects = await this.projects
        this.projects = projects.data
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
          await ProjectService.delete(category, h)
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