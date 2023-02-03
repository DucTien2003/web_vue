<template>
  <div class="row">
    <div class="col-4 block-input">
      <h4 class="heading">Write your post here</h4>
      <label for="input-name" class="label">name post:</label>
      <input
        type="text"
        id="input-name"
        class="input-name"
        v-model="inputName"
      />
      <label for="input" class="label">content:</label>
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
      <h3 class="heading">All post:</h3>
      <template>
        <li
          v-for="(itemPost, index) in listPost"
          :key="index"
          class="block-post__item row"
        >
          <div class="col-3">{{ itemPost.name }}</div>
          <div class="body-item col-9">
            <div class="content">{{ itemPost.description }}</div>
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
          </div>
        </li>
      </template>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PostsManager",
  data() {
    return {
      isWarning: false,
      isEdit: false,
      indexEditing: 0,
      inputName: "",
      inputValue: "",
      listPost: []
    };
  },
  created() {
    const getUsers = () => {
      axios
        .get("https://6094a8a9f082a4001736b30d.mockapi.io/posts")
        .then(response => {
          response.data.forEach(dataItem => {
            dataItem.id = Number(dataItem.id);
          });
          this.listPost = response.data.reverse();
        })
        .catch(error => {
          console.log(error);
        });
    };
    getUsers();
  },
  methods: {
    post() {
      if (!this.inputValue.trim() || !this.inputName.trim()) {
        if (!this.inputName.trim()) {
          document.querySelector(".input-name").focus();
        } else {
          document.querySelector(".input").focus();
        }
        this.isWarning = true;
      } else if (!this.isEdit) {
        this.isWarning = false;
        this.listPost.unshift({
          name: this.inputName,
          description: this.inputValue,
          isActive: false,
          id: this.listPost[0].id + 1
        });
        this.inputValue = "";
        this.inputName = "";
        document.querySelector(".input-name").focus();
      } else {
        this.isWarning = false;
        this.listPost[this.indexEditing].description = this.inputValue;
        this.listPost[this.indexEditing].name = this.inputName;
        this.inputName = "";
        this.inputValue = "";
        document.querySelector(".input").focus();
        this.isEdit = false;
      }
    },
    edit(itemPost, index) {
      this.isEdit = true;
      this.inputName = itemPost.name;
      this.inputValue = itemPost.description;
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
.block-input {
  display: flex;
  flex-direction: column;
}

.heading {
  display: inline-block;
  margin-bottom: 20px;
  font-size: 25px;
}

.input-name {
  margin-bottom: 20px;
  padding: 6px;
  font-size: 16px;
}

.input {
  margin-bottom: 10px;
  padding: 6px;
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

.body-item {
  display: flex;
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
