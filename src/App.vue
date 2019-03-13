<template>
  <div id="app">
    <h1>以下是router-view节点</h1>
    <div class="routerArea">
    <router-view/>
    </div>
    <h1>以上是router-view节点</h1>
      <li>
        <router-link to="/logout">注销</router-link>
      </li>
      <li>
        <router-link to="/">主界面</router-link>
      </li>
      <li>
        <router-link to="/adhasdhasdh">不存在的页面</router-link>
      </li>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.routerArea{
  border-style: solid;
  border-width: 5px;
  border-color: rgb(6, 81, 104);
}
</style>
