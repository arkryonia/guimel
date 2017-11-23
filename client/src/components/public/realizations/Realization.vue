<template>
  <div>
    <t-section-title :title='project.name'></t-section-title>
    <section class="main" v-animate-css="'fadeInRightBig'">
      <div class="block">
        <div class="line">
          <div class="md-8 md-offset-2"> 
            <vue-markdown :source="project.description" >  </vue-markdown>
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
import RealizationService from '@/services/RealizationService'
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
      real: {},
    }
  },
  async mounted() {
    this.real = await RealizationService.details(this.$route.params.id)
    try {
      const response = await this.real
      this.real = response.data
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
