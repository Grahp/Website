---
permalink: onyx-spec
redirect_from:
  - onyx/spec
title: Onyx Spec
---
WIP [[Onyx|Onyx]] specification.

## Outline

- [[Onyx Spec Intro|Intro]]
- [[Onyx Spec Layout]]
- [AAAH](onyx-spec-layout.md)
- [[Onyx Spec Conflict Overrides|Conflict Overrides]]

## Onyx Splitting

Every consecutive stroke after the first stroke of a multi-stroke outline is skeletonized.

This means that skeleton strokes may not be used for briefs, or otherwise.

Onyx splitting avoids all word boundary conflicts, and introduces remarkably few conflicts.

## Briefing
![TODO](https://img.shields.io/badge/TODO-orange?style=flat)

Arbitrary briefs are used very rarely in Onyx. I believe these are very personal, and shouldn't be dictated by your theory.

## TODO

- `#^*` → `*`
