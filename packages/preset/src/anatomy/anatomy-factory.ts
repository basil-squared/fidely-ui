import type { Anatomy, AnatomyInstance } from './type'

export function anatomy(name: string): Anatomy<never> {
  let hasBaseParts = false
  const map: Record<string, true> = {}

  function parts<U extends string>(...values: U[]): AnatomyInstance<U> {
    if (hasBaseParts) {
      throw new Error(
        '[fidely/anatomy] .parts() can only be called once. Use .extend() instead.'
      )
    }

    hasBaseParts = true

    for (const v of values) map[v] = true

    return createInstance<U>()
  }

  function createInstance<T extends string>(): AnatomyInstance<T> {
    return {
      get keys() {
        return Object.keys(map) as T[]
      },

      extend<V extends string>(...values: V[]) {
        for (const v of values) map[v] = true
        return createInstance<T | V>()
      },
    }
  }

  return {
    parts,
  } as Anatomy<never>
}
