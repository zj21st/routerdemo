<template>
  <div>
    <ul>
      <li>
        <router-link to="/HelloWorld">主界面</router-link>
      </li>
    </ul>
    <div>{{message}}</div>
    <img src="../assets/timg.jpg" />
  </div>
</template>

<script>
export default {
  name: 'logout',
  data () {
    return {
      message: '注销成功！'
    }
  }
}
</script>

<style scoped>
</style>
