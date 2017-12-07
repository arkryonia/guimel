<template>
  <div>
    <h2 class="backend-title">All projects</h2>
    <hr class="backend-line">
    <div class="posts">
      <div v-for="p in projects" :key="p.id" class="item">
        <h3> {{p.name}} </h3>
        <p>
          {{p.description}}
        </p>
        <router-link :to="{name:'ProjectUpdate', params:{id: `${p.id}` } }" class="moreButton" > Modifier </router-link>
        <button @click="removeCat(p.id)" class="moreButton fr" > Supprimer </button>
      </div>
    </div>
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