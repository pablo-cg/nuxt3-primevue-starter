import { useDialog } from 'primevue/usedialog'

interface DynamicDialogOptions {
  component: any
  header: string
  width?: string
  templates?: any
  onClose?: (modalData: any) => void
  props?: any
  data?: any
  style?: any
  [key: string]: any
}

export const useDynamicDialog = () => {
  const dialog = useDialog()

  function launchDynamicDialog(options: DynamicDialogOptions) {
    const { component, header, width, templates, onClose, props, data, style, ...config } = options

    return dialog.open(component, {
      data: {
        ...data
      },
      props: {
        header,
        modal: true,
        draggable: false,
        style: {
          width: width || '50vw',
          ...style
        },
        ...props
      },
      templates,
      onClose: (modalData) => onClose?.(modalData),
      ...config
    })
  }

  return { launchDynamicDialog }
}
