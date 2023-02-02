<template>
  <div class="row">
    <div class="col-4 block-input">
      <label for="input" class="heading">Write your post here</label>
      <textarea
        name=""
        id="input"
        cols="30"
        rows="10"
        spellcheck="false"
        class="input"
        v-model="inputValue"
      ></textarea>
      <div class="warning" :class="isWarning ? '' : 'invisible'">
        Invalid post
      </div>
      <button class="btn btn-primary" @click="post">Post</button>
    </div>
    <div class="col-8 block-post">
      <h3 class="heading">Your post here</h3>
      <template>
        <li
          v-for="(itemPost, index) in listPost"
          :key="index"
          class="block-post__item"
        >
          <div class="content">{{ itemPost }}</div>
          <div class="actions">
            <div class="edit">
              <img
                src="../assets/icon/edit-svgrepo-com.svg"
                alt="edit"
                class="icon"
                @click="edit(itemPost, index)"
              />
            </div>
            <div>
              <img
                src="../assets/icon/bin-svgrepo-com.svg"
                alt="bin"
                class="icon"
                @click="remove(index)"
              />
            </div>
          </div>
        </li>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialMediaApp",
  data() {
    return {
      isWarning: false,
      isEdit: false,
      indexEditing: 0,
      inputValue: "",
      listPost: ["say hello", "hello world"]
    };
  },
  methods: {
    post() {
      if (!this.inputValue.trim()) {
        document.querySelector(".input").focus();
        this.isWarning = true;
      } else if (!this.isEdit) {
        this.isWarning = false;
        this.listPost.unshift(this.inputValue);
        this.inputValue = "";
        document.querySelector(".input").focus();
      } else {
        this.isWarning = false;
        this.listPost[this.indexEditing] = this.inputValue;
        this.inputValue = "";
        document.querySelector(".input").focus();
        this.isEdit = false;
      }
    },
    edit(itemPost, index) {
      this.isEdit = true;
      this.inputValue = itemPost;
      document.querySelector(".input").focus();
      this.indexEditing = index;
    },
    remove(index) {
      this.listPost.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.heading {
  display: inline-block;
  margin-bottom: 20px;
  font-size: 25px;
}

.input {
  margin-top: 20px;
  font-size: 16px;
  width: 175px;
  height: 130px;
}

.warning {
  width: 70%;
  border: 1px solid red;
  color: red;
  font-size: 16px;
  margin-bottom: 10px;
}

.block-post__item {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  padding: 10px;
  border: 1px solid transparent;
}

.block-post__item:hover {
  border: 1px solid rgb(10, 168, 31);
}

.content {
  padding: 0 18px 0 10px;
  flex: 1;
}

.actions {
  display: flex;
}

.icon {
  position: relative;
  display: inline-block;
  margin-right: 12px;
  width: 20px;
  cursor: pointer;
}
</style>
