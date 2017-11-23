<template>
  <div>
    <t-section-title title='Projets' ></t-section-title>
    <section class="main">
      <div class="block">
        <div class="line">
          <div class="md-8 md-offset-2">
            <div v-for="projet in projets " >
              <h3>{{projet.title}}</h3>
              <p>
                {{projet.resume}}
              </p>
              <router-link :to="{name:'Projets', params:{id: `${projet.id}` } }" class="moreButton" > Lire </router-link>
            </div>
          </div>
          <router-link to="/backend"> Backend </router-link>
        </div>
      </div>
    </section>
  </div> 
</template>

<script>
  import TSectionTitle from '@/components/includes/TSectionTitle'
  import _ from 'lodash'

  export default {
    components: {
      TSectionTitle,
    },
    data() {
      return {
        projets: [],
      }
    },
    async mounted() {
      this.projets = await this.$http.get('http://localhost:8080/post')
      try {
        const response = this.projets
        const cat = 'Express'
        this.projets = _.filter(response.data, {
          title: cat,
        })
      } catch (err) {
        // eslint-disable-next-line
        console.log('Erreur', err)
      }
    },
  }

</script>

<style>

</style>
