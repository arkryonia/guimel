<template>
  <div>
    <h2 class="backend-title">All posts</h2>
    <hr class="backend-line">
    <div class="posts">
      <div v-for="post in posts" class="item">
        <h3> {{post.title}} </h3>
        <p>
          {{post.resume}}
        </p>
        <router-link :to="{name:'PostUpdate', params:{id: `${post.id}` } }" class="moreButton" > Modifier </router-link>
        <button @click="removePost(post)" class="moreButton fr" > Supprimer </button>
      </div>
    </div>
  </div>
</template>
<script>
  import PostService from '@/services/PostService'
  import TSectionTitle from '@/components/includes/TSectionTitle'
  
  export default {
    components: {
      TSectionTitle,
    },
    data() {
      return {
        name: '',
        description: '',
        cats: [],
        posts: [],
      }
    },
    async mounted() {
      this.posts = await PostService.list()
      try {
        const posts = await this.posts
        this.posts = posts.data
      } catch (err) {
        // eslint-disable-next-line
        console.log('Erreur', err)
      }
    },
    methods: {
      async removePost(post) {
        const h = {
          Authorization: `${this.$store.state.token}`,
        }
        try {
          await PostService.delete(post.id, h)
          this.$router.push({ name: 'Backend' })
        } catch (error) {
          // eslint-disable-next-line
          alert(error)
        }
      },
    },
  }
</script>

<style>

</style>