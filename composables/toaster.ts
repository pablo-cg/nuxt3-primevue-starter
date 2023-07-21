import { useToast } from 'primevue/usetoast'

type ToastSeverity = 'success' | 'info' | 'warn' | 'error'

type ToastOptions = {
  severity: ToastSeverity
  summary: string
  detail: string
  life?: number
}

export const useToaster = () => {
  const toast = useToast()
  function showToast(options: ToastOptions) {
    toast.add({ ...options, life: options.life || 3000 })
  }

  return {
    showToast
  }
}
