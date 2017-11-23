<template>
  <div>
    <!-- <t-section-title title='Update a Post'></t-section-title> -->
    <section class="main">
      <div class="block">
        <div class="line">
          <div class="md-8 md-offset-2">
            <div class="form-container">
              <label for="title">Title</label>
              <input type="text" name="title" id="title" v-model="title">
              <label for="tags">Tags</label>
              <input type="text" name="tags" id="tags" v-model="tags">
              <label for="resume">Résumé</label>
              <textarea name="resume" id="resume" cols="30" rows="10" v-model="resume"></textarea>
              <label for="content">Contenu</label>
              <textarea name="content" id="content" cols="30" rows="10" v-model="content"></textarea>
              <button type="submit" @click="update()">Modifier</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import slug from 'slug'
import PostService from '@/services/PostService'
import TSectionTitle from '@/components/includes/TSectionTitle'
// import CategoryAdd from '@/components/CategoryAdd'
// import('../../../node_modules/vuetify/dist/vuetify.min.css')

export default {
  components: {
    TSectionTitle,
  },
  data() {
    return {
      post: {},
      category: '',
      title: '',
      slug: '',
      tags: '',
      resume: '',
      content: '',
      author: {},
    }
  },
  async mounted() {
    this.post = await PostService.details(this.$route.params.id)
    try {
      const response = await this.post
      this.post = response.data
      this.category = this.post.category
      this.title = this.post.title
      this.slug = this.post.slug
      this.tags = this.post.tags
      this.resume = this.post.resume
      this.content = this.post.content
      this.author = this.post.author
    } catch (err) {
      // eslint-disable-next-line
      console.log('Erreur', err)
    }
  },
  methods: {
    async update() {
      const postdata = {
        category: this.category,
        title: this.title,
        slug: slug(this.title),
        tags: this.tags,
        resume: this.resume,
        content: this.content,
        author: this.$store.state.user,
      }
      const headers = {
        Authorization: this.$store.state.token,
      }
      try {
        await PostService.update(this.$route.params.id, postdata, headers)
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
