export const transformClassToJestMock = <T extends AnyClass>(
  classToTransform: T
): ClassFunctions<T> => {
  const mock = Reflect.ownKeys(classToTransform.prototype).reduce<
    ClassFunctions<T>
  >((prev, curr) => {
    return {
      ...prev,
      [curr]: jest.fn()
    }
  }, {})
  return mock
}

export type ClassFunctions<T extends AnyClass> = {
  [K in keyof InstanceType<T>]?: jest.Mock<any, any>
}

type AnyClass = new (...args: any[]) => any
