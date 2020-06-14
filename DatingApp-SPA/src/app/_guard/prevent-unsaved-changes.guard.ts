import { MemeberEditComponent } from './../members/memeber-edit/memeber-edit.component';
import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PreventUnsavedChanges
  implements CanDeactivate<MemeberEditComponent> {
  canDeactivate(component: MemeberEditComponent) {
    if (component.editForm.dirty) {
      return confirm(
        'Are you sure you wan to continue? Any unsaved changes will be lost'
      );
    }

    return true;
  }
}
