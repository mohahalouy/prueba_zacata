<template>
  <div class="containerCards">
    <template v-if="hasPosts">
      <PostCard v-for="(post,index) in filteredPosts" :key="index" :post="post" :index="index"></PostCard>
    </template>
    <template v-else-if="!hasPosts">
      No hay publicaciones disponibles
    </template>
    <template v-if="filteredPosts.length === 0">
      <NoMatchingPostsMessage></NoMatchingPostsMessage>
    </template>
  </div>
</template>

<script>
import PostCard from "../components/PostCard";
import {computed, ref} from "vue";
import PostAPI from "@/services/PostAPI";
import NoMatchingPostsMessage from "@/components/NoMatchingPostsMessage";

export default {
  name: "PostWrapper",
  components: {NoMatchingPostsMessage, PostCard},
  props: ['searchContent'],
  async setup(props) {
    const posts = ref([])
    const loadPost = async () => {
      try {
        const response = await PostAPI.getPost()
        posts.value = response.data
      } catch (err) {
        console.log(err)
      }
    }

    await loadPost()


    const filteredPosts = computed(() => {
      if (!props.searchContent) {
        return posts.value;
      }
      const query = props.searchContent.toLowerCase();
      return posts.value.filter(post => {
        return post.title.toLowerCase().includes(query) ||
            post.body.toLowerCase().includes(query);
      });
    });


    const hasPosts = computed(() => posts.value.length > 0);

    return {
      posts,
      filteredPosts,
      hasPosts
    }
  },
}
</script>

<style scoped lang="scss">
.containerCards {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 90%;
  flex-wrap: wrap;
  padding: 40px 0;
  margin: 0 auto;
}

</style>