# TypeScript Interview Preparation

This repository is my focused workspace for preparing for intense TypeScript technical coding assessments and interviews. I use it to practice the kind of problems that show up in real hiring loops: reading unfamiliar code quickly, modeling data with interfaces and types, validating input safely, and writing clean logic under time pressure.

Rather than collecting notes only, I am using this repo as a hands-on training ground. Each exercise is meant to sharpen both my TypeScript fundamentals and my interview execution: understanding requirements, translating them into code, catching edge cases, and explaining decisions clearly.

## Why I Built This Repo

I wanted a place where I could repeatedly practice TypeScript in a way that feels close to an actual assessment environment. That means:

- working through small but realistic coding problems
- strengthening confidence with types, arrays, objects, loops, conditionals, and function design
- practicing defensive programming and validation logic
- improving speed without sacrificing readability
- getting comfortable reasoning out loud about my code, just like in interviews

This repo is part coding practice, part interview rehearsal.

## Current Exercise

The main exercise in this repository is a small order pricing engine:

- `ts-order-pricing-engine/src/types.ts`
  Defines the core domain models such as `MenuItem`, `Order`, `OrderItem`, `Customer`, and `Receipt`.
- `ts-order-pricing-engine/src/data.ts`
  Contains sample menu data and a sample order for testing scenarios.
- `ts-order-pricing-engine/src/pricing.ts`
  Contains business logic such as:
  - finding a menu item by ID
  - validating orders
  - checking for empty orders
  - detecting missing menu items
  - handling unavailable items
  - validating invalid quantities
- `ts-order-pricing-engine/src/index.ts`
  A simple entry point for trying functions and inspecting output while practicing.

This project is intentionally small so I can focus on correctness, clarity, and TypeScript thinking instead of framework setup.

## Skills I’m Practicing Here

- TypeScript type modeling with interfaces and unions
- Safe handling of `undefined`
- Looping through arrays with `for...of`
- Guard clauses and `continue`
- Validation patterns and error collection
- Writing readable, interview-friendly logic
- Explaining code behavior in plain English

## How I Use This Repo

I use this repository as an active practice lab. A typical session looks like this:

1. Pick a small feature or validation rule to implement.
2. Write the logic from scratch without over-relying on autocomplete.
3. Think through edge cases such as missing data, invalid IDs, or zero quantities.
4. Refactor the solution so it is easy to explain in an interview.
5. Revisit the code and ask, “Could I talk through this confidently under pressure?”

The goal is not just to get working code. The goal is to become fluent enough to solve, explain, and defend these decisions during a live technical interview.

## What This Repo Represents

This is a record of deliberate preparation. I am using it to build:

- stronger TypeScript fundamentals
- better problem-solving habits
- faster debugging instincts
- more confidence for technical assessments
- clearer communication during interviews

## Running Type Checks

To type-check the repository locally:

```bash
npx tsc --noEmit
```

## Ongoing Plan

I plan to keep expanding this repository with more interview-style TypeScript exercises, including:

- data transformation challenges
- inventory and pricing rules
- async and API-style scenarios
- utility functions and reusable helpers
- stricter validation and error handling cases

Over time, this repo will grow into a practical archive of the patterns, mistakes, and improvements that are helping me get better at TypeScript interviews.
