<script setup lang="ts">
import { AutoCompleteCompleteEvent } from 'primevue/autocomplete'

export interface AppInputProps {
  name: string
  label: string
  modelValue?: string | null
  required?: boolean
  data: any[]
  searchKey: string
}

const props = defineProps<AppInputProps>()

const { value, errorMessage } = useField<any | null>(() => props.name, undefined, {
  syncVModel: true
})

const filteredData = ref<any[]>([])

function filterData(e: AutoCompleteCompleteEvent) {
  if (!e.query.length) {
    filteredData.value = [...props.data]
  } else {
    filteredData.value = props.data?.filter((item) => {
      return normalizeString(item[props.searchKey]).includes(normalizeString(e.query))
    })
  }
}
</script>

<template>
  <span class="p-float-label flex-auto p-fluid">
    <AutoComplete
      :inputId="name"
      class="w-full"
      :class="{ 'p-invalid': errorMessage }"
      :aria-describedby="name"
      v-model="value"
      v-bind="$attrs"
      :suggestions="filteredData"
      @complete="filterData"
    />
    <label :for="name">{{ label }} <span v-if="required" class="text-red-500">(*)</span></label>
  </span>
  <small class="p-error" :id="name">{{ errorMessage || '&nbsp;' }}</small>
</template>
