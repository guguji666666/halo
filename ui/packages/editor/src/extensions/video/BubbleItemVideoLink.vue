<script setup lang="ts">
import { i18n } from "@/locales";
import type { Editor } from "@/tiptap/vue-3";
import { computed, type Component } from "vue";
import Video from "./index";

const props = defineProps<{
  editor: Editor;
  isActive: ({ editor }: { editor: Editor }) => boolean;
  visible?: ({ editor }: { editor: Editor }) => boolean;
  icon?: Component;
  title?: string;
  action?: ({ editor }: { editor: Editor }) => void;
}>();

const src = computed({
  get: () => {
    return props.editor.getAttributes(Video.name).src;
  },
  set: (src: string) => {
    props.editor.chain().updateAttributes(Video.name, { src: src }).run();
  },
});
</script>

<template>
  <input
    v-model.lazy="src"
    :placeholder="i18n.global.t('editor.common.placeholder.link_input')"
    class="block w-full rounded-md border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 hover:bg-gray-100 focus:border-blue-500 focus:ring-blue-500"
  />
</template>
