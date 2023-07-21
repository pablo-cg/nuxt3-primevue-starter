<script setup lang="ts">
export interface AppInputProps {
  name: string
  label: string
  modelValue?: string | boolean | undefined
  required?: boolean
}

const props = defineProps<AppInputProps>()

const { value, errorMessage } = useField<string | boolean | undefined>(
  () => props.name,
  undefined,
  {
    syncVModel: true
  }
)
</script>

<template>
  <div class="flex flex-column gap-2">
    <span class="flex flex-column gap-2">
      <label :for="name">{{ label }} <span v-if="required" class="text-red-500">(*)</span></label>
      <InputSwitch
        :id="name"
        :class="{ 'p-invalid': errorMessage }"
        :aria-describedby="name"
        v-bind="$attrs"
        v-model="value"
      />
    </span>
    <small class="p-error" :id="name">{{ errorMessage || '&nbsp;' }}</small>
  </div>
</template>
