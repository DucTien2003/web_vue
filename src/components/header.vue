<template>
  <div class="header">
    <div class="brand">
      <img
        src="../assets/img/general_img/myLogo.svg"
        alt="Logo"
        class="brand__logo"
      />
      <div className="brand__name">Duc<span>Tien</span></div>
    </div>
    <div class="search">
      <div class="search__input">
        <input type="text" spellcheck="false" placeholder="Search..." />
      </div>
      <button class="search__btn">
        <img
          src="../assets/icon/search-svgrepo-com.svg"
          alt=""
          class="search__icon"
        />
      </button>
    </div>
    <div class="actions">
      <div class="action__login action">Login</div>
      <div class="action__register action">Register</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompHeader"
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

.brand {
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
}

.brand__logo {
  width: 45px;
}

.brand__name {
  color: #6f7a7d;
  font-weight: 700;
  font-size: 2.4rem;
  padding-left: 2px;
}

.brand__name span {
  color: #112129;
}

.search {
  display: flex;
  align-items: center;
  border-radius: 999px;
}

.search__input {
  height: var(--input-height);
  width: 360px;
}

.search__input input {
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
  width: 100%;
  height: 100%;
  font-size: 16px;
  padding: 20px;
  border: 2px solid rgb(87, 87, 87);
  background-color: #f4f4f4;
  caret-color: red;
}

.search__input::placeholder {
  user-select: none;
}

.search__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--input-height);
  width: 50px;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
  background-color: rgb(244, 244, 244);
  border: 2px solid rgb(87, 87, 87);
  cursor: pointer;
}

.search__btn:active {
  border: 2px solid black;
}

.search__icon {
  width: 20px;
}

.actions {
  display: flex;
}

.action {
  font-size: 22px;
}

.action:hover {
  text-decoration: underline;
  cursor: pointer;
}

.action + .action {
  margin-left: 16px;
}

.action__login {
}

.action__register {
}
</style>
