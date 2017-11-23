<template>
  <div>
    <t-section-title :title='post.title' :resume='post.resume'></t-section-title>
    <section class="main" v-animate-css="'fadeInRightBig'">
      <div class="block">
        <div class="line">
          <div class="md-8 md-offset-2"> 
            <vue-markdown :source="post.content" >  </vue-markdown>
            <span class="date"> Ce {{ post.created | moment }}  </span>
          </div>
        </div>
      </div>
      <div class="comments">
        <!-- <disqus shortname="your_shortname_disqus" identifier="page_id" url="http://example.com/path"></disqus> -->
      </div>
    </section>
  </div>
</template>

<script>
import moment from 'moment'
import VueMarkdown from 'vue-markdown'
import PostService from '@/services/PostService'
import TSectionTitle from '@/components/includes/TSectionTitle'

export default {
  components: {
    TSectionTitle,
    VueMarkdown,
    // VueDisqus,
  },
  name: 'app',
  data() {
    return {
      post: {},
    }
  },
  async mounted() {
    this.post = await PostService.details(this.$route.params.id)
    // this.tags = this.post.tags
    try {
      const response = await this.post
      this.post = response.data
      // eslint-disable-next-line
    } catch (err) {
      // eslint-disable-next-line
      console.log('Lorem Ipsum', err.response.data.message)
    }
  },
  filters: {
    moment(date) {
      moment.locale('fr')
      return moment(date).format('dddd Do MMMM YYYY à hh:mm:ss');
    },
  },
}
</script>
