import Button from 'primevue/button'
import Card from 'primevue/card'
import PrimeVue from 'primevue/config'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Dropdown from 'primevue/dropdown'
import AutoComplete from 'primevue/autocomplete'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import InputNumber from 'primevue/inputnumber'
import InputSwitch from 'primevue/inputswitch'
import InputMask from 'primevue/inputmask'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Calendar from 'primevue/calendar'
import DialogService from 'primevue/dialogservice'
import DynamicDialog from 'primevue/dynamicdialog'
import Tooltip from 'primevue/tooltip'
import ConfirmationService from 'primevue/confirmationservice'
import ConfirmDialog from 'primevue/confirmdialog'

// ACA VAN LOS COMPONENTES DE PRIMEVUE
export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.use(PrimeVue, {
    ripple: true,
    locale: {
      monthNames: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
      ],
      dayNamesMin: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
      emptyMessage: 'No hay opciones disponibles',
      clear: 'Limpiar',
      cancel: 'Cancelar',
      today: 'Hoy',
      dateFormat: 'dd/mm/yy',
      ariaPaginator: 'Navegador',
      ariaFirstPageLabel: 'Primera página',
      ariPrevPageLabel: 'Página anterior',
      ariaNextPageLabel: 'Siguiente página',
      ariaLastPageLabel: 'Última página',
      ariaRowsPerPageLabel: 'Elementos por página'
    }
  })
  nuxt.vueApp.use(ToastService)
  nuxt.vueApp.use(DialogService)
  nuxt.vueApp.use(ConfirmationService)
  nuxt.vueApp.component('InputText', InputText)
  nuxt.vueApp.component('Password', Password)
  nuxt.vueApp.component('InputNumber', InputNumber)
  nuxt.vueApp.component('InputSwitch', InputSwitch)
  nuxt.vueApp.component('InputMask', InputMask)
  nuxt.vueApp.component('DataTable', DataTable)
  nuxt.vueApp.component('Column', Column)
  nuxt.vueApp.component('Button', Button)
  nuxt.vueApp.component('Dropdown', Dropdown)
  nuxt.vueApp.component('AutoComplete', AutoComplete)
  nuxt.vueApp.component('Toast', Toast)
  nuxt.vueApp.component('Card', Card)
  nuxt.vueApp.component('Calendar', Calendar)
  nuxt.vueApp.component('DynamicDialog', DynamicDialog)
  nuxt.vueApp.component('ConfirmDialog', ConfirmDialog)
  nuxt.vueApp.directive('tooltip', Tooltip)
})
