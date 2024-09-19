import { TmdbControllerApi } from '../../generated/api'

export function useClient() {
  const client = new TmdbControllerApi(undefined, '')
  return { client }
}
