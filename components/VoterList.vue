<template>
  <div>
    <h2>Voter List</h2>
    <div v-for="voter in voters" :key="voter.ref">
      {{ voter.firstName }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      voters: [],
    }
  },
  async fetch() {
    const { voters } = await this.$axios.get('/.netlify/functions/fetch-voters')
    this.voters = voters
  },
  fetchOnServer: false,
}
</script>

<style lang="scss" scoped>
</style>