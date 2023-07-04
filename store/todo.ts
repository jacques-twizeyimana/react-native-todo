import { Provider, atom, useAtom, useSetAtom } from "jotai";
import type { PrimitiveAtom } from "jotai";

export type Todo = {
  title: string;
  description: string;
  completed: boolean;
  archived?: boolean;
};

export type RemoveFn = (atom: PrimitiveAtom<Todo>) => void;

export const todosAtom = atom<PrimitiveAtom<Todo>[]>([]);

// get todos
export const completedTodos = atom<PrimitiveAtom<Todo>[]>((get) => {
  const todos = get(todosAtom);
  return todos.filter((atom) => get(atom).completed && !get(atom).archived);
});

export const archivedTodos = atom<PrimitiveAtom<Todo>[]>((get) => {
  const todos = get(todosAtom);
  return todos.filter((atom) => get(atom).archived);
});

export const uncompletedTodos = atom<PrimitiveAtom<Todo>[]>((get) => {
  const todos = get(todosAtom);
  return todos.filter((atom) => !get(atom).completed && !get(atom).archived);
});
