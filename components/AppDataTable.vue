<script setup lang="ts">
import { type TableColumn, type TableData } from '~/types'

interface GenericTableProps {
  data: TableData[]
  columns: TableColumn[]
}

defineProps<GenericTableProps>()

function getNestedValue(rowData: TableData, field: string[]) {
  let value = rowData

  for (const key of field) {
    value = value[key] || ''
  }

  return value
}

function getField(column: TableColumn, rowData: TableData) {
  if (column.field) {
    const fields = column.field.split('.')
    return getNestedValue(rowData, fields)
  }
}
</script>

<template>
  <DataTable :value="data" v-bind="$attrs">
    <template #empty>
      <div class="flex justify-content-center align-items-center gap-3 my-3 text-2xl">
        <i class="pi pi-folder-open" style="font-size: 3rem" />
        <span>No hay datos para mostrar</span>
      </div>
    </template>
    <Column v-for="column in columns" :key="column.field" :header="column.header">
      <template #body="{ data }">
        <span v-if="column.format">{{ column.format(getField(column, data)) }}</span>
        <span v-else-if="column.slotName">
          <slot :name="column.slotName" :data="data" />
        </span>
        <span v-else>{{ getField(column, data) }}</span>
      </template>
    </Column>
    <template #loading>
      <div class="flex justify-content-center align-items-center gap-3 my-3 text-2xl">
        <i class="pi pi-spin pi-spinner" style="font-size: 3rem" />
        <span>Cargando datos</span>
      </div>
    </template>
  </DataTable>
</template>
