import { Store } from '../store';
import { addTodo, remove, complete, clear } from './pureFunctions';

export function reducer(state: Store, action: any): Store {
  switch (action.type) {
    case 'addTodo':
      return addTodo(state, action.label);

    case 'remove':
      return remove(state, action.id);

    case 'clear':
      return clear(state);

    case 'complete':
      return complete(state, action.id);
  }

  return state;
}