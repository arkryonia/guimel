<template>
  <div>
    <section class="main">
      <router-view></router-view>
      <div class="block">
        <div class="md-10 md-offset-1">
          <div class="line">
            <div class="posts">
              <div v-for="post in posts">
                <h3> {{post.title}} </h3>
                <p>
                  {{post.resume}}
                </p>
                <router-link :to="{name:'PostUpdate', params:{id: `${post.id}` } }" class="moreButton" > Modifier </router-link>
                <button @click="removePost(post)" class="moreButton fr" > Supprimer </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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