<script setup lang="ts">
type PrimevueCalendar = string | Date | string[] | Date[] | null | undefined

export interface AppInputProps {
  name: string
  label: string
  modelValue?: PrimevueCalendar
  required?: boolean
}

const props = defineProps<AppInputProps>()

const { value, errorMessage } = useField<PrimevueCalendar>(() => props.name, undefined, {
  syncVModel: true
})
</script>

<template>
  <span class="p-float-label">
    <Calendar
      :inputId="name"
      class="w-full"
      :class="{ 'p-invalid': errorMessage }"
      v-bind="$attrs"
      v-model="value"
    />
    <label :for="name">{{ label }} <span v-if="required" class="text-red-500">(*)</span></label>
  </span>
  <small class="p-error" :id="name">{{ errorMessage || '&nbsp;' }}</small>
</template>
