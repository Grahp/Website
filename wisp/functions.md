# Wisp Functions

Functions are an [interface](data.md) in [Wisp](../wisp.md). Part of the [Wisp Contract](contract.md).

## Semantics

Functions are first class [Values](data.md#value) that can be created at compiletime. They return values and can optionally take arguments.

Functions may be inlined.

- Function contracts
  - Public functions should take and return **values**.
