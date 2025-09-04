export type Pokemon = {
  id: number
  name: string
  cries: {
    latest: string
    legacy: string
  }
  sprites: {
    back_default: string
    front_default: string
  }
}
