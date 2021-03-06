<template>
  <v-footer :fixed="fixed" app color="transparent" class="pa-0">
    <v-tabs
      background-color="primary"
      dark
      icons-and-text
      fixed-tabs
      align-center
      hide-slider
      v-model="activeTab"
    >
      <template v-for="(item, i) in links">
        <v-tab v-if="!item.hidden" :key="i" :to="item.path">
          <span>{{ item.title }}</span>
          <v-icon class="my-2">fa-{{ item.icon }}</v-icon>
        </v-tab>
      </template>
    </v-tabs>
  </v-footer>
</template>

<script>
import { general } from "@/mixins/footer";

export default {
  mixins: [general],
  data: () => ({
    activeTab: 0,
  }),
};
</script>
