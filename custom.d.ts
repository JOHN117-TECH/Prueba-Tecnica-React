// custom.d.ts
/// <reference types="jest" />

declare namespace jest {
    interface Matchers<R, T> {
      toBeInTheDocument(): R;
    }
  }