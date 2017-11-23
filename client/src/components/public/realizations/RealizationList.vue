<template>
  <div>
    <t-section-title :title='name' :resume='presentation' ></t-section-title>
    <section class="main" v-animate-css="'fadeInRightBig'"> 
      <div class="block">
        <div class="line">
          <div class="md-8 md-offset-2">
            <div v-for="real in reals" >
              <h3>{{real.name}}</h3>
              <p>
                {{real.description}}
              </p>
              <router-link :to="{name:'Realization', params:{id: `${real.id}` } }" class="moreButton" > Lire plus </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import _ from 'lodash'
import RealizationService from '@/services/RealizationService'
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
      reals: [],
      name: 'Realisations',
      presentation: `
      MSc. Ir. en architecture des systèmes d'information et Doctorant en  ICT4D,
      il est un amoureux du fullstack dev et de Python. Lorsqu’il n’a pas la
      main à la pâte numérique, il est entrain de lire Platon, Socrate, Confucius, 
      Lao Tseu..., de lancer sa prochaine startup ou à donner des conférences.`,
      user: {},
    }
  },
  async mounted() {
    this.reals = await RealizationService.list()
    try {
      const response = this.reals
      this.reals = _.orderBy(response.data, 'name')
    } catch (err) {
      // eslint-disable-next-line
      console.log('Erreur', err)
    }
  },
}
</script>
