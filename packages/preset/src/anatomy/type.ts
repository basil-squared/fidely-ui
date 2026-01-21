export type AnatomyInstance<T extends string> = {
  readonly keys: readonly T[]
  extend: <U extends string>(...parts: U[]) => AnatomyInstance<T | U>
}

export type Anatomy<T extends string> = AnatomyInstance<T> & {
  parts: <U extends string>(...parts: U[]) => AnatomyInstance<U>
}
