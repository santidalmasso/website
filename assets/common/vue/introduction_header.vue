<script>
export default {
  props: {
    heading: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
  },
  methods: {
    versioned() {
      const version = window.location.href.match(/v.+[0-9]/g);
      if (version) {
        return " " + version[0];
      }
      return false;
    }
  }
}
</script>

<template lang="pug">
div
  h1.text-5xl
    strong {{ heading }}
      span(v-show="versioned()") {{ versioned() }}
  p {{ description }}
</template>
