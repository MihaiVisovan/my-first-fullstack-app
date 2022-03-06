<template>
  <div>
    <div
      v-for="(post, index) in posts"
      :key="post._id"
      style="background: red; width: 50px; height: 50px"
      @dblclick="deletePost(post._id)"
    >
      {{ post.name }}
    </div>
    <div class="create-post">
      <label for="create-post"> </label>
      <input type="name" id="create-post" v-model="name" placeholder="Create a post" />
      <button @click="addPost">Add post</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import postService from '../postService.js';
export default {
  name: 'PostComponent',
  data() {
    return {
      posts: [],
      name: '',
    };
  },
  async created() {
    this.posts = await postService.getPosts();
  },
  methods: {
    async addPost() {
      await postService.addPost(this.name, this.name);
      this.posts = await postService.getPosts();
    },
    async deletePost(id) {
      await postService.deletePost(id);
      this.posts = await postService.getPosts();
    },
  },
};
</script>

<style scoped></style>
