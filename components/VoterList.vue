<template>
  <div>
    <h2>Voter List</h2>
    <div v-for="user in users" :key="user.ref">
      {{ user.firstName }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    voters: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style lang="scss" scoped>
</style>