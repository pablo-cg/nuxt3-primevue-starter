<script setup lang="ts">
export interface AppInputProps {
  name: string
  label: string
  mask: string
  modelValue?: string
  required?: boolean
}

const props = defineProps<AppInputProps>()

const { value, errorMessage } = useField<string | undefined>(() => props.name, undefined, {
  syncVModel: true
})
</script>

<template>
  <span class="p-float-label flex-auto">
    <InputMask
      :id="name"
      class="w-full"
      :class="{ 'p-invalid': errorMessage }"
      :aria-describedby="name"
      v-bind="$attrs"
      v-model="value"
      :mask="mask"
    />
    <label :for="name">{{ label }} <span v-if="required" class="text-red-500">(*)</span></label>
  </span>
  <small class="p-error" :id="name">{{ errorMessage || '&nbsp;' }}</small>
</template>
