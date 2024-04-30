import { CanDeactivateFn } from '@angular/router';

export const unsavedChangesGuard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  // if(confirm('Tiene cambios sin guardar, desea guardarlos?')) {
  //   ///
  // } else {

  // }

  return false;
};
