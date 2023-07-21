import { AxiosError } from 'axios'

interface RequestUtilOptions<ResponseType, PayloadType = {}, > {
  action(actionPayload?: PayloadType): Promise<ResponseType>
  loader?(isLoading: boolean): void
  resolve?(response: ResponseType): void
  reject?(error: AxiosError): void
  payload?: PayloadType
}

export async function requestUtil<ResponseType, PayloadType>(
  options: RequestUtilOptions<ResponseType, PayloadType>
): Promise<void> {
  try {
    options.loader?.(true)
    let response: ResponseType

    if (!options.payload) {
      response = await options.action()
    } else {
      response = await options.action({ ...options.payload })
    }

    options.resolve?.(response)
  } catch (e) {
    const err = e as AxiosError

    if (!options.reject && err.response?.status !== 422) {
      console.error('error', err)
    }

    options.reject?.(err)
  } finally {
    options.loader?.(false)
  }
}
