export function normalizeString(value: string) {
  return value
    ?.toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
}
