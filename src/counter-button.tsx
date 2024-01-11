import { createSignal } from "solid-js";

export function CounterButton() {
  const [count, setCount] = createSignal(0);

  return (
    <button type="button" onClick={() => setCount(count() + 1)}>
      Count: {count()}
    </button>
  );
}
