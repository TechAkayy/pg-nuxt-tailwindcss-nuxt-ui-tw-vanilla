<script setup lang="ts">
  import { useMobileMenu } from '~/composables/mobile-menu'
  import { isCurrentRoute } from '~/composables/nav'
  const { isMobileMenuOpen } = useMobileMenu()

  defineProps({
    navlinks: {
      type: Object,
      default() {
        return []
      },
    },
    currentPath: {
      type: String,
      default: '/',
    },
  })
</script>
<template>
  <BaseSheet class="rounded-b-xl" role="surface-container">
    <div v-if="isMobileMenuOpen" id="mobile-menu" class="md:hidden">
      <div class="p-4 space-y-1">
        <NuxtLink
          v-for="(navlink, index) in navlinks"
          :key="index"
          :to="navlink.link"
        >
          <BaseButton
            class="!block !px-3 !ring-0 rounded-md text-base text-left w-full"
            :class="[
              isCurrentRoute(navlink, currentPath)
                ? 'pg-primary-text'
                : 'pg-on-inverse-primary-text',
            ]"
            :variant="isCurrentRoute(navlink, currentPath) ? 'filled' : 'text'"
            container
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            >{{ navlink.text }}</BaseButton
          >
        </NuxtLink>
      </div>
    </div>
  </BaseSheet>
</template>
<style scoped></style>
