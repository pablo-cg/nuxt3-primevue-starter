<script setup lang="ts">
export interface AppInputProps {
  name: string
  label: string
  placeholder?: string
  modelValue?: any
  required?: boolean
}

const props = defineProps<AppInputProps>()

const { errorMessage, value } = useField(() => props.name, undefined, {
  syncVModel: true
})
</script>

<template>
  <span class="p-float-label">
    <Dropdown
      :inputId="name"
      class="w-full"
      :class="{ 'p-invalid': errorMessage }"
      :placeholder="placeholder || 'Seleccione'"
      v-bind="$attrs"
      v-model="value"
    />
    <label :for="name">{{ label }} <span v-if="required" class="text-red-500">(*)</span></label>
  </span>
  <small class="p-error" :id="name">{{ errorMessage || '&nbsp;' }}</small>
</template>
