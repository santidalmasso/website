<script>
import AppRoot from "/common/vue/app_root.vue";


export default {
  components: {
    AppRoot,
  },
  data() {
    return {
      build_date: this.$conf.build_date,
      environment: this.$conf.environment,
      sidebar: {
        api_reference_href: "https://doc.deno.land/https/deno.land/x/rhum@" + this.$conf.rhum.latest_version + "/mod.ts",
        base_url: this.$conf.rhum.base_url + "/#",
        github_href: "https://github.com/drashland/rhum",
        logo: "/assets/common/img/logo_rhum.svg",
        menus: {
          "Getting Started": {
            Quickstart: "/#quickstart",
            Importing: "/#importing",
            Features: "/#features",
            Articles: "/#articles",
            FAQ: "/faq",
          },
          "Latest News": {},
          Tutorials: {
            //Introduction: "/tutorials",
            "Writing Tests": "/tutorials/writing-tests",
            "Stubs": "/tutorials/stubs",
            "Mocks": "/tutorials/mocks",
          },
        },
        module: "Rhum",
      }
    };
  },
}
</script>

<template lang="pug">
app-root(
  :build_date="build_date"
  :environment="environment"
  :sidebar="sidebar"
  news_tags="deno, rhum"
  module="Rhum"
)
</template>
