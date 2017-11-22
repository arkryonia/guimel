<template>
  <div>
    <t-section-title :title='name' :resume='presentation' ></t-section-title>
    <section class="main" v-animate-css="'fadeInRightBig'"> 
      <div class="block">
        <div class="line">
          <!-- <p> Pas de post </p> -->
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
import CategoryService from '@/services/CategoryService'
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
      posts: [],
      name: '',
      presentation: '',
      user: {},
    }
  },
  mounted() {
    this.posts = this.getPosts(this.$route.params.id)
  },
  methods: {
    async getPosts(id) {
      const posts = await PostService.list()
      const cat = await CategoryService.details(id)
      this.posts = _.filter(posts.data, { category: id })
      this.name = cat.data.name
      this.presentation = cat.data.description
    },
  },
  watch: {
    // eslint-disable-next-line
    '$route.params.id'(newId, oldId) {
      this.getPosts(newId)
    },
  },
}
</script>
