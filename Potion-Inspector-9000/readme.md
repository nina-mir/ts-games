### Game 1 – **“Potion-Inspector 9000”**

> **Theme:** You’ve just been hired by an alchemist-guild to build their _Potion-Inspector 9000_ helper script. Cauldrons bubble all day, and every few seconds the guild’s backend spits out a raw JSON object that might be a **Healing**, **Mana**, or **Buff** potion.  
> Each kind has its _own required & optional fields_ plus a couple of quirks. Your script must (1) recognise the potion type at runtime, (2) validate it, and (3) log a customised message.

---

#### 1. Starter “mystery” data

```ts
// pretend this comes from an un-typed API ⇣
export const rawPotions: unknown[] = [
  { id: 1, kind: 'heal',     hpRestore: 50,  expiry: '2025-05-01' },
  { id: 2, kind: 'mana',     mpRestore: 35,  concentration: 0.8 },
  { id: 3, kind: 'buff',     stats: ['str', 'dex'], duration: 120 },
  { id: 4, kind: 'heal',     hpRestore: 25 },                 // ✖ expiry missing
  { id: 5, kind: 'mana',     mpRestore: '50' },               // ✖ wrong type
];
```

---

#### 2. Your tasks 💪

1. **Model the shapes**  
   Create three interfaces:
   * `HealingPotion`   — needs `kind: 'heal'`, `hpRestore: number`, `expiry: string`  
   * `ManaPotion`      — `kind: 'mana'`, `mpRestore: number`, *optional* `concentration?: number`  
   * `BuffPotion`      — `kind: 'buff'`, array `stats: string[]`, `duration: number`

2. **Write type-guard functions**  
   Implement  
   ```ts
   function isHealingPotion(x: unknown): x is HealingPotion
   function isManaPotion   (x: unknown): x is ManaPotion
   function isBuffPotion   (x: unknown): x is BuffPotion
   ```  
   *Tip:* For the optional `concentration`, accept `undefined` **or** a number.

3. **Process the stream**  
   Write a `inspectPotion` function that takes `unknown` and:
   * narrows it with your guards,
   * logs ✅ **valid** potion details (make the message fun!),
   * logs ❌ **error** messages for invalid objects (missing / wrong-typed fields).

4. **Bonus-round (stretch)**  
   * Make `inspectPotion` return a discriminated-union result type  
     ```ts
     type InspectionResult =
       | { ok: true;  potion: HealingPotion | ManaPotion | BuffPotion }
       | { ok: false; reason: string; raw: unknown }
     ```
   * Pipe `rawPotions` through it, collect just the successful ones into a typed array `goodPotions`.

---

#### 3. Hints (no spoilers)

- A lightweight runtime helper such as  
  ```ts
  const isNumber = (v: unknown): v is number => typeof v === 'number';
  ```  
  can keep guard code tidy.
- Remember: _optional_ means `prop in obj` **might** be `false`.
- For the stretch goal, `Array.filter` + a **user-defined type guard** will let you end up with `HealingPotion | ManaPotion | BuffPotion[]` automatically.

---

Fire up your editor, give it a go, and ping me when you’ve got it compiling (or if you run into red squiggles). When you’re happy with Game 1, I’ll roll out Game 2—each one will crank the type-wizardry up a notch. Have fun brewing! 🧪