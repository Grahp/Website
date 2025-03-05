# Wisp Data

Data interfaces a [Wisp](../wisp.md) language must support. Part of the [Wisp Contract](contract.md).

## Atomic Type Interfaces

### Object

All Wisp types are `Object`s.

- `wisp/equals [obj x]` Returns whether `obj` is logically equal to `x`, as defined by the type of `obj`.
- `wisp/str [obj]` Stringifies `obj`. Defined on a per-type basis.
- `wisp/type [obj]` Returns the type of `obj`.

### Value

An immutable value. All `Value`s are `Object`s.

Equality on values is defined in terms of value, not identity.

### Ref

A mutable reference type. All `Ref`s are `Object`s.

Equality on references is defined in terms of identity. If 2 Refs are the same object, they are equal.

- `wisp/deref [ref]` Returns the current `Object` inside of `ref`, typically a stable `Value`.

### Number

A number. All `Number`s are `Value`s.

Equality on `Number`s is defined in a type-independent manner.
- `7 == 7`
- `42 == 42.0 == 84/2`
- `1/3 != 0.3333333333333333`

### Integer

A whole number. `Integer`s are `Number`s.

`Integer`s can grow to infinite size.

### Decimal

A decimal number. `Decimal`s are `Number`s.

`Decimal`s can grow to infinite size and infinite decimal precision.

### Ratio

A fractional number. `Ratio`s are `Number`s.

`Ratio`s can grow to infinite size and infinite precision.

### Character

A single character. `Character`s are `Value`s.

`Character`s are the constituents of strings.

- `wisp/int [char]` Returns the integer character code of `char`.

### Null

Null represents nothing. `Null` is a `Value`.

### Boolean

A boolean value. `Boolean`s are `Value`s.

[Equality](equality.md) is part of the [Wisp Contract](contract.md)

### Symbols

An identifier used to convey [names](names.md). `Symbol`s are `Value`s.

Contain an optional string namespace, and string name.

Symbols may convey the name of a function or method, a var, a key in a map, etc.

- `wisp.symbol/namespace [sym]` Returns the namespace of `sym`.
- `wisp.symbol/name [sym]` Returns the name of `sym`.
