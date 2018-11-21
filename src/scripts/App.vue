<template>
  <div id="app">

    <el-header>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        active-text-color="#ffd04b">
        <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/todo">Todo</router-link></el-menu-item>
      </el-menu>
    </el-header>

    <el-main>
      <router-view/>
    </el-main>

    <el-footer>
      footer
    </el-footer>

  </div>
</template>

<script>
    import '@scss/app.scss'
</script>