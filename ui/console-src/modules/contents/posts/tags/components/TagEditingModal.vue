<script lang="ts" setup>
import SubmitButton from "@/components/button/SubmitButton.vue";
import AnnotationsForm from "@/components/form/AnnotationsForm.vue";
import { setFocus } from "@/formkit/utils/focus";
import { FormType } from "@/types/slug";
import useSlugify from "@console/composables/use-slugify";
import { reset, submitForm, type FormKitNode } from "@formkit/core";
import type { Tag } from "@halo-dev/api-client";
import { coreApiClient } from "@halo-dev/api-client";
import {
  IconArrowLeft,
  IconArrowRight,
  IconRefreshLine,
  Toast,
  VButton,
  VModal,
  VSpace,
} from "@halo-dev/components";
import { cloneDeep } from "lodash-es";
import { computed, nextTick, onMounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

const props = withDefaults(
  defineProps<{
    tag?: Tag;
  }>(),
  {
    tag: undefined,
  }
);

const emit = defineEmits<{
  (event: "close"): void;
  (event: "previous"): void;
  (event: "next"): void;
}>();

const { t } = useI18n();

const formState = ref<Tag>({
  spec: {
    displayName: "",
    slug: "",
    color: "#ffffff",
    cover: "",
  },
  apiVersion: "content.halo.run/v1alpha1",
  kind: "Tag",
  metadata: {
    name: "",
    generateName: "tag-",
  },
});

const modal = ref<InstanceType<typeof VModal> | null>(null);

const saving = ref(false);

const keepAddingSubmit = ref(false);

const isUpdateMode = computed(() => !!props.tag);

const modalTitle = computed(() => {
  return isUpdateMode.value
    ? t("core.post_tag.editing_modal.titles.update")
    : t("core.post_tag.editing_modal.titles.create");
});

const annotationsFormRef = ref<InstanceType<typeof AnnotationsForm>>();

const handleSaveTag = async () => {
  annotationsFormRef.value?.handleSubmit();
  await nextTick();

  const { customAnnotations, annotations, customFormInvalid, specFormInvalid } =
    annotationsFormRef.value || {};
  if (customFormInvalid || specFormInvalid) {
    return;
  }

  formState.value.metadata.annotations = {
    ...annotations,
    ...customAnnotations,
  };

  try {
    saving.value = true;
    if (isUpdateMode.value) {
      await coreApiClient.content.tag.updateTag({
        name: formState.value.metadata.name,
        tag: formState.value,
      });
    } else {
      await coreApiClient.content.tag.createTag({
        tag: formState.value,
      });
    }

    if (keepAddingSubmit.value) {
      reset("tag-form");
    } else {
      modal.value?.close();
    }

    Toast.success(t("core.common.toast.save_success"));
  } catch (e) {
    console.error("Failed to create tag", e);
  } finally {
    saving.value = false;
  }
};

const handleSubmit = (keepAdding = false) => {
  keepAddingSubmit.value = keepAdding;
  submitForm("tag-form");
};

onMounted(() => {
  setFocus("displayNameInput");
});

watch(
  () => props.tag,
  (tag) => {
    if (tag) {
      formState.value = cloneDeep(tag);
    }
  },
  {
    immediate: true,
  }
);

// slug
const { handleGenerateSlug } = useSlugify(
  computed(() => formState.value.spec.displayName),
  computed({
    get() {
      return formState.value.spec.slug;
    },
    set(value) {
      formState.value.spec.slug = value;
    },
  }),
  computed(() => !isUpdateMode.value),
  FormType.TAG
);

// fixme: check if slug is unique
// Finally, we need to check if the slug is unique in the database
async function slugUniqueValidation(node: FormKitNode) {
  const value = node.value;
  if (!value) {
    return true;
  }

  const fieldSelector = [`spec.slug=${value}`];

  if (props.tag) {
    fieldSelector.push(`metadata.name!=${props.tag.metadata.name}`);
  }

  const { data: tagsWithSameSlug } = await coreApiClient.content.tag.listTag({
    fieldSelector,
  });

  return !tagsWithSameSlug.total;
}
</script>
<template>
  <VModal ref="modal" :title="modalTitle" :width="700" @close="emit('close')">
    <template #actions>
      <span @click="emit('previous')">
        <IconArrowLeft />
      </span>
      <span @click="emit('next')">
        <IconArrowRight />
      </span>
    </template>

    <FormKit
      id="tag-form"
      type="form"
      name="tag-form"
      :config="{ validationVisibility: 'submit' }"
      @submit="handleSaveTag"
    >
      <div>
        <div class="md:grid md:grid-cols-4 md:gap-6">
          <div class="md:col-span-1">
            <div class="sticky top-0">
              <span class="text-base font-medium text-gray-900">
                {{ $t("core.post_tag.editing_modal.groups.general") }}
              </span>
            </div>
          </div>
          <div class="mt-5 divide-y divide-gray-100 md:col-span-3 md:mt-0">
            <FormKit
              id="displayNameInput"
              v-model="formState.spec.displayName"
              name="displayName"
              :label="
                $t('core.post_tag.editing_modal.fields.display_name.label')
              "
              type="text"
              validation="required|length:0,50"
            ></FormKit>
            <FormKit
              v-model="formState.spec.slug"
              :help="$t('core.post_tag.editing_modal.fields.slug.help')"
              :label="$t('core.post_tag.editing_modal.fields.slug.label')"
              name="slug"
              type="text"
              validation="required|length:0,50|slugUniqueValidation"
              :validation-rules="{ slugUniqueValidation }"
              :validation-messages="{
                slugUniqueValidation: $t(
                  'core.common.form.validation.slug_unique'
                ),
              }"
            >
              <template #suffix>
                <div
                  v-tooltip="
                    $t(
                      'core.post_tag.editing_modal.fields.slug.refresh_message'
                    )
                  "
                  class="group flex h-full cursor-pointer items-center border-l px-3 transition-all hover:bg-gray-100"
                  @click="handleGenerateSlug(true)"
                >
                  <IconRefreshLine
                    class="h-4 w-4 text-gray-500 group-hover:text-gray-700"
                  />
                </div>
              </template>
            </FormKit>
            <FormKit
              v-model="formState.spec.color"
              name="color"
              :help="$t('core.post_tag.editing_modal.fields.color.help')"
              :label="$t('core.post_tag.editing_modal.fields.color.label')"
              type="color"
              validation="length:0,50"
            ></FormKit>
            <FormKit
              v-model="formState.spec.cover"
              name="cover"
              :help="$t('core.post_tag.editing_modal.fields.cover.help')"
              :label="$t('core.post_tag.editing_modal.fields.cover.label')"
              type="attachment"
              :accepts="['image/*']"
              validation="length:0,1024"
            ></FormKit>
          </div>
        </div>
      </div>
    </FormKit>

    <div class="py-5">
      <div class="border-t border-gray-200"></div>
    </div>

    <div class="md:grid md:grid-cols-4 md:gap-6">
      <div class="md:col-span-1">
        <div class="sticky top-0">
          <span class="text-base font-medium text-gray-900">
            {{ $t("core.post_tag.editing_modal.groups.annotations") }}
          </span>
        </div>
      </div>
      <div class="mt-5 divide-y divide-gray-100 md:col-span-3 md:mt-0">
        <AnnotationsForm
          :key="formState.metadata.name"
          ref="annotationsFormRef"
          :value="formState.metadata.annotations"
          kind="Tag"
          group="content.halo.run"
        />
      </div>
    </div>

    <template #footer>
      <div class="flex justify-between">
        <VSpace>
          <SubmitButton
            :loading="saving && !keepAddingSubmit"
            :disabled="saving && keepAddingSubmit"
            type="secondary"
            :text="$t('core.common.buttons.submit')"
            @submit="handleSubmit"
          >
          </SubmitButton>
          <VButton
            v-if="!isUpdateMode"
            :loading="saving && keepAddingSubmit"
            :disabled="saving && !keepAddingSubmit"
            @click="handleSubmit(true)"
          >
            {{ $t("core.common.buttons.save_and_continue") }}
          </VButton>
        </VSpace>
        <VButton @click="modal?.close()">
          {{ $t("core.common.buttons.cancel_and_shortcut") }}
        </VButton>
      </div>
    </template>
  </VModal>
</template>
