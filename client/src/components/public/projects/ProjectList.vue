<template>
  <div>
    <t-section-title :title='name' :resume='presentation' ></t-section-title>
    <section class="main" v-animate-css="'fadeInRightBig'"> 
      <div class="block">
        <div class="line">
          <div class="md-8 md-offset-2">
            <div v-for="project in projects" >
              <h3>{{project.name}}</h3>
              <p>
                {{project.description}}
              </p>
              <router-link :to="{name:'Project', params:{id: `${project.id}` } }" class="moreButton" > Lire plus </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import _ from 'lodash'
import ProjectService from '@/services/ProjectService'
import THeader from '@/components/includes/THeader'
import TSectionTitle from '@/components/includes/TSectionTitle'
import TFooter from '@/components/includes/TFooter'

export default {
  name: 'app',
  components: {
    THeader,
    TSectionTitle,
    TFooter,
  },
  data() {
    return {
      cat: 'lorem',
      projects: [],
      name: 'Projets',
      presentation: `
      MSc. Ir. en architecture des systèmes d'information et Doctorant en  ICT4D,
      il est un amoureux du fullstack dev et de Python. Lorsqu’il n’a pas la
      main à la pâte numérique, il est entrain de lire Platon, Socrate, Confucius, 
      Lao Tseu..., de lancer sa prochaine startup ou à donner des conférences.`,
      user: {},
    }
  },
  async mounted() {
    this.projects = await ProjectService.list()
    try {
      const response = this.projects
      this.projects = _.orderBy(response.data, 'name')
    } catch (err) {
      // eslint-disable-next-line
      console.log('Erreur', err)
    }
  },
}
</script>
