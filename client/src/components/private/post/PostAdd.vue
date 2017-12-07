<template>
  <div>
    <!-- <t-section-title title='Add a Post'></t-section-title> -->
    <h2 class="backend-title">Add post</h2>
    <hr class="backend-line">
    <div class="form-container">
      <label for="category">Category</label>
      <select name="category" id="category" v-model="category">
        <option v-for="category in cats" v-bind:value='category.id' :key="category.id"> {{category.name}} </option>
      </select>
      <label for="title">Title</label>
      <input type="text" name="title" id="title" v-model="title">
      <label for="tags">Tags</label>
      <input type="text" name="tags" id="tags" v-model="tags">
      <label for="resume">Résumé</label>
      <textarea name="resume" id="resume" cols="30" rows="10" v-model="resume"></textarea>
      <label for="content">Contenu</label>
      <textarea name="content" id="content" cols="30" rows="10" v-model="content"></textarea>
      <p v-bind="content"></p>
      <button type="submit" @click="add()">Save</button>
    </div>
  </div>
</template>
<script>
import slug from 'slug'
import PostService from '@/services/PostService'
import CategoryService from '@/services/CategoryService'
import TSectionTitle from '@/components/includes/TSectionTitle'
// import CategoryAdd from '@/components/CategoryAdd'
// import('../../../node_modules/vuetify/dist/vuetify.min.css')

export default {
  components: {
    TSectionTitle,
  },
  data() {
    return {
      category: '',
      title: '',
      slug: '',
      tags: '',
      resume: '',
      content: '',
      author: '',
      cats: '',
    }
  },
  methods: {
    async add() {
      const postdata = {
        category: this.category,
        title: this.title,
        slug: slug(this.title),
        tags: this.tags,
        resume: this.resume,
        content: this.content,
        author: this.$store.state.user,
      }
      const h = {
        Authorization: this.$store.state.token,
      }
      try {
        await PostService.add(postdata, h)
        this.$router.push({ name: 'Backend' })
      } catch (error) {
        // eslint-disable-next-line
        console.log(error)
      }
    },
  },
  async mounted() {
    this.cats = await CategoryService.list()
    try {
      const response = await this.cats
      this.cats = response.data
    } catch (err) {
      // eslint-disable-next-line
      console.log('Erreur', err)
    }
  },
}
</script>

<style>

</style>
