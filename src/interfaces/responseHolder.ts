export default interface ResponseHolder<T> {
  api: ResponseData<T>
}

interface ResponseData<T> {
  results: number
  players: T[]
}
