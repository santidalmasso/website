<script>
export default {
  props: {
    api_reference_href: {
      type: String,
      required: false,
    },
    base_url: {
      type: String,
      required: true,
    },
    github_href: {
      type: String,
      required: true,
    },
    menus: {
      type: Object,
      required: true
    },
    logo: {
      type: String,
      required: true,
    },
    module: {
      type: String,
      required: true,
    },
    styles: {
      type: Object,
      default: () => {
        return {
          background_color: "#282633"
        }
      }
    }
  },
  methods: {
    closeSidebar() {
      this.$root.$emit("close-sidebar");
    },
    getMenuItemLink(menuItemName, href) {
      if (menuItemName == "Latest News") {
        return href;
      }
      return this.base_url + href;
    }
  }
}
</script>

<style lang="scss" scoped>

ul li {
  list-style-type: none;
}

ul li ul li {
  margin-left: 0;
}

ul li ul li a {
  padding-left: 3rem !important;
}

.sidebar {
  -webkit-overflow-scrolling: touch;
  display: block;
  height: 100%;
  overflow: auto;
  top: 0;
  left: 0;
  height: 100%;
  position: fixed;
  border-right: 1px solid #e8e8e8;
  box-shadow: 7px 0 12px -6px rgba(100,100,100,0.2);
  z-index: 10;
  a {
      color: #f4f4f4;
      &:hover {
          text-decoration: none;
      }
  }
}

.menu-name {
  color: #f4f4f4;
  background: #36304a;
  border-bottom: 1px solid #3f3955;
  font-weight: bold;
  letter-spacing: 0.10875rem;
  margin: 0;
  text-transform: uppercase;
}

.menu-name-link {
  display: block;
  padding: 0.725rem 1.45rem;
  &:hover {
    color: #f4f4f4;
  }
  &.is-link {
    cursor: pointer;
    &:hover {
      color: #333333;
      background-color: #f4f4f4;
    }
  }
}

.menu-item {
  margin-left: 0;
  &:last-of-type {
    border-bottom: 1px solid #3f3955;
  }
}

.menu-item-link,
.menu2-item-link {
  display: block;
  color: #f4f4f4;
  padding: 0rem 1.45rem;
  &:hover {
    color: #333333;
    background-color: #f4f4f4;
  }
}
</style>

<template lang="pug">
div.sidebar.text-sm(:style="'background-color: ' + styles.background_color + ';'")
  a(:href="base_url + '/'")
    img(:alt="module" :src="logo" style="height: 150px").mx-auto.m-10
  div(style="border-top: 1px solid #3f3955;")
    div(v-for="(sub_menu_items, menu_item_name) in menus")
      div.menu-name
        a.menu-name-link {{ menu_item_name }}
      ul.mb-0
        li.menu-item(v-for="(href, link_text) in sub_menu_items")
          a.no-hover.menu-item-link(v-if="typeof href == 'object'") {{ link_text }}
          ul.mb-0(v-if="typeof href == 'object'")
            li.menu2-item(v-for="(href, link_text) in sub_menu_items[link_text]")
              a.menu2-item-link(:href="base_url + href" @click="closeSidebar()") {{ link_text }}
          a(v-else).menu-item-link(
            :href="getMenuItemLink(menu_item_name, href)"
            @click="closeSidebar()"
            :target="menu_item_name == 'Latest News' && link_text != 'No articles yet' ? '_BLANK' : ''"
          ) {{ link_text }}
    div.menu-name(v-if="api_reference_href")
      a.menu-name-link.is-link(:href="api_reference_href" @click="closeSidebar()") API Reference
    div.menu-name
      a.menu-name-link.is-link(:href="github_href" @click="closeSidebar()") GitHub
    div.menu-name
      a.menu-name-link.is-link(href="/") Back To Drash Land
  p(style="color: #f4f4f4").mt-5.text-sm.text-center
    a(href="https://drash.land") &copy; 2019-2020 Drash Land
</template>
