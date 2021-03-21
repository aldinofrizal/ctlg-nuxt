<template>
  <div class="app-wrapper mx-auto">
    <Logo />
    <div class="page-content">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
.app-wrapper {
  max-width: 1200px;
  padding: 2rem;

  .page-content {
    min-height: 85vh;
  }
}
</style>
