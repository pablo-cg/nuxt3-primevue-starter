export type TableData = Record<string, any>

export type TableColumn = {
  field?: string
  header: string
  format?: (value: any) => any
  slotName?: string
}
