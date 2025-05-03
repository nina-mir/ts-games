**Designing Game 2**

For Game 2, I want to make it a bit more challenging than the first one. The first game focused on runtime type guards and union types, optional properties, and arrays. Now I want to introduce more advanced TypeScript concepts, like mapped types, conditional types, template literal types, and generics. I’m thinking this game could involve a puzzle about verifying property types and paths at compile-time, along with some runtime challenges. The user should code it out themselves—no full solutions.

**Designing Game 2: Dungeon Event Hub**

Game 2 could be about building an event dispatcher for a dungeon crawler. The user will work with entities like ‘player,’ ‘monster,’ and ‘trap’, and actions like ‘spawn,’ ‘hit,’ and ‘die’ to create type-safe event handling. They’ll define the event name as a string literal type, match event payloads to them, and build a `emit` function using generics. They’ll also implement a type guard for event payloads. This would involve template literal types, mapped types, and conditional types.


Thought for 11 seconds


### Game 2 – **“Dungeon Event Dispatcher”**

> **Theme:** You’ve been promoted to Chief Mage Engineer for a procedurally-generated dungeon crawler.
> Every time *something* happens (a goblin spawns, a trap springs, a hero dies…) the game kernel fires an **event string** plus a **payload** object.
> Your job is to write a TypeScript-strict “dispatcher” so that only the right payload can accompany each event and autocomplete works like magic.

---

#### 1 ▸ The core concept

*An event name is always* `"<entity>:<action>"`

* **Entities**: `player`, `monster`, `trap`
* **Actions**: `spawn`, `hit`, `die`

Examples: `"player:spawn"`, `"monster:hit"`, `"trap:die"`.

Each event needs a different payload shape:

| Event           | Payload example                                              |
| --------------- | ------------------------------------------------------------ |
| `player:spawn`  | `{ id: string; class: 'warrior' \| 'mage' \| 'rogue' }`      |
| `player:hit`    | `{ id: string; damage: number; crit?: boolean }`             |
| `player:die`    | `{ id: string; at: number /* unix ms */ }`                   |
| `monster:spawn` | `{ id: string; species: 'goblin' \| 'ogre'; level: number }` |
| `monster:hit`   | `{ id: string; damage: number }`                             |
| `monster:die`   | `{ id: string; drops: string[] }`                            |
| `trap:spawn`    | `{ id: string; type: 'spike' \| 'fire'; room: string }`      |
| `trap:hit`      | `{ id: string; victimId: string }`                           |
| `trap:die`      | `{ id: string }` (a trap can be disarmed)                    |

---

#### 2 ▸ Your tasks (code-along)

1. **Create the event-name union automatically**
   *Starter hint:*

   ```ts
   type Entity  = 'player' | 'monster' | 'trap';
   type Action  = 'spawn'  | 'hit'     | 'die';
   type EventName = /* use a template-literal type here */;
   ```

2. **Map each event to its payload type**
   Make an `interface EventPayloads { /* … */ }` whose keys are *exactly* the members of `EventName`.
   *Tip:* Use an **inline mapped type** so the compiler yells if you forget one.

3. **Implement the dispatcher skeleton**

   ```ts
   export function emit<E extends EventName>(
     name: E,
     payload: EventPayloads[E]
   ): void {
     // (imagine this talks to WebSocket, logs, etc.)
     console.log('[EMIT]', name, payload);
   }
   ```

   The goal: **Passing a wrong payload shape should be a compile-time error.**

4. **Safety helper (stretch)**
   Write a user-defined type guard:

   ```ts
   export function isEvent<E extends EventName>(
     name: string,
     payload: unknown
   ): payload is EventPayloads[E] // ← conditional on E
   ```

   so you can runtime-check loose data before calling `emit`.

5. **Extra quest (optional but spicy)**
   Create a utility type `PickByAction<A extends Action>` that gives you all event names whose action is `A`.
   Example: `PickByAction<'die'>` should be `'player:die' | 'monster:die' | 'trap:die'`.

---

#### 3 ▸ Starter file (paste into `dungeonDispatcher.ts`)

```ts
// ① Entity / Action primitives
type Entity = 'player' | 'monster' | 'trap';
type Action = 'spawn'  | 'hit'     | 'die';

// ② EventName – fill this in
type EventName = /* your template literal trick */;

// ③ EventPayloads – fill this in
interface EventPayloads /* … */ {}

// ④ Dispatcher – already typed, implement if you like
export function emit<E extends EventName>(
  name: E,
  payload: EventPayloads[E]
) {
  console.log('[EMIT]', name, payload);
}

// ⑤ (stretch) isEvent guard + PickByAction utility
```

---

#### 4 ▸ Hints (no spoilers)

* **Template-literal types** can be nested:

  ```ts
  type Join<A extends string, B extends string> = `${A}:${B}`;
  ```
* To force *exhaustiveness* in `EventPayloads`, try:

  ```ts
  type BuildPayloads<T extends string> = { [K in T]: /* ... */ };
  ```

  and then alias it.
* Inside the guard, narrow the string *first* (`if (name.startsWith('player:') …`) then refine the payload.
* For `PickByAction`, look at **indexed access** on `EventName` using `Extract<…>` or conditional types.

---

### Your move 🧙‍♂️

Crack open your editor and sculpt those types.
When:

1. `emit('monster:die', { id: 'm-7', drops: ['gold'] });` compiles ✔️, **and**
2. `emit('monster:die', { id: 'm-7', damage: 5 });` red-lines ❌,

you’ve conquered Game 2. Check in with me (show the red-squiggle screenie or paste your snippet) and I’ll conjure up Game 3!
