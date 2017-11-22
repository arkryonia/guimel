<template>
  <div>
    <t-section-title :title='name' :resume='presentation' ></t-section-title>
    <section class="main" v-animate-css="'fadeInRightBig'"> 
      <div class="block">
        <div class="line">
          <div class="md-8 md-offset-2">
            <div v-for="post in posts" >
              <h3>{{post.title}}</h3>
              <p>
                {{post.resume}}
              </p>
              <router-link :to="{name:'Post', params:{id: `${post.id}` } }" class="moreButton" > Lire plus </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import _ from 'lodash'
import PostService from '@/services/PostService'
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
      posts: [],
      name: 'Hodonou Sounton',
      presentation: `
      MSc. Ir. en architecture des systèmes d'information et Doctorant en  ICT4D,
      il est un amoureux du fullstack dev et de Python. Lorsqu’il n’a pas la
      main à la pâte numérique, il est entrain de lire Platon, Socrate, Confucius, 
      Lao Tseu..., de lancer sa prochaine startup ou à donner des conférences.`,
      user: {},
    }
  },
  async mounted() {
    this.posts = await PostService.list()
    try {
      const response = this.posts
      this.posts = _.orderBy(response.data, 'created', 'desc')
    } catch (err) {
      // eslint-disable-next-line
      console.log('Erreur', err)
    }
  },
}
</script>
