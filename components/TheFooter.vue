<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'TheFooter',
  // 	},
  // })
</script>
<template>
  <BaseSheet class="pb-24 pt-12">
    <div class="container mx-auto px-8">
      <div class="flex flex-wrap justify-center space-x-8">
        <NuxtLink
          href="https://www.facebook.com/pinegrow/"
          aria-label="facebook"
          external
          target="_blank"
        >
          <Icon name="logos:facebook" tag="span" size="28px"></Icon>
        </NuxtLink>
        <NuxtLink
          href="https://twitter.com/pinegrow"
          aria-label="facebook"
          external
          target="_blank"
        >
          <Icon name="logos:twitter" tag="span" size="28px"></Icon>
        </NuxtLink>
        <NuxtLink
          href="https://forum.pinegrow.com/vue-designer"
          aria-label="facebook"
          external
          target="_blank"
        >
          <Icon name="logos:discourse-icon" tag="span" size="28px"></Icon>
        </NuxtLink>
        <NuxtLink
          href="https://www.youtube.com/@pinegrow/videos"
          aria-label="facebook"
          external
          target="_blank"
        >
          <Icon name="logos:youtube-icon" tag="span" size="28px"></Icon>
        </NuxtLink>
      </div>
    </div>
  </BaseSheet>
</template>
<style scoped></style>
