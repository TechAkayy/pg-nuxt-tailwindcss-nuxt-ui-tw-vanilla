<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'WalkThrough',
  // 	},
  // })
</script>
<template>
  <BaseSheet class="px-4 py-24 relative" role="primary">
    <div class="container mx-auto flex flex-wrap items-center justify-center">
      <div class="mx-auto p-4 w-full lg:w-6/12">
        <div class="p-4 rounded-2xl shadow-xl">
          <div class="flex items-center justify-center pb-4 lg:justify-start">
            <h3 class="capitalize mb-0">Quick Walkthrough</h3>
          </div>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/Ia4kkaBow9Q"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="flex-col flex mx-auto p-4 w-full lg:w-6/12">
        <div class="flex flex-wrap sm:flex-nowrap">
          <div
            class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 md:w-1/3 lg:items-start lg:pl-8"
          >
            <ul class="text-center lg:mt-2 lg:text-left">
              <li class="mb-4">
                <NuxtLink
                  class="hover:pg-primary-container-text"
                  href="https://pinegrow.com/docs/vue-designer"
                  external
                  target="_blank"
                  >Documentation</NuxtLink
                >
              </li>
              <li class="mb-4">
                <NuxtLink
                  class="hover:pg-primary-container-text"
                  href="https://www.youtube.com/@pinegrow/videos"
                  external
                  target="_blank"
                  >Video Tutorials</NuxtLink
                >
              </li>
              <li class="mb-4">
                <NuxtLink
                  class="hover:pg-primary-container-text"
                  href="https://pinegrow.com/support"
                  external
                  target="_blank"
                  >Support</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div
            class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 md:w-1/3 lg:items-start lg:pl-8"
          >
            <ul class="text-center lg:mt-2 lg:text-left">
              <li class="mb-4">
                <NuxtLink
                  class="hover:pg-primary-container-text"
                  href="https://pinegrow.com/vue-designer"
                  external
                  target="_blank"
                  >Trial</NuxtLink
                >
              </li>
              <li class="mb-4">
                <NuxtLink
                  class="hover:pg-primary-container-text"
                  href="https://pinegrow.com/vue-designer"
                  external
                  target="_blank"
                  >Purchase</NuxtLink
                >
              </li>
              <li class="mb-4">
                <NuxtLink
                  class="hover:pg-primary-container-text"
                  href="https://pinegrow.com/release_notes/"
                  external
                  target="_blank"
                  >Release Notes</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </BaseSheet>
</template>
<style scoped></style>
