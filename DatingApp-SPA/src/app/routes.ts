import { ListsResolver } from './_resolvers/lists.resolver';
import { MemberEditResolver } from './_resolvers/member-edit-resolver';
import { MemeberEditComponent } from './members/memeber-edit/memeber-edit.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guard/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail-resolver';
import { MemberListResolver } from './_resolvers/member-list-resolver';
import { PreventUnsavedChanges } from './_guard/prevent-unsaved-changes.guard';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'members',
        component: MemberListComponent,
        resolve: { users: MemberListResolver },
      },
      {
        path: 'members/:id',
        component: MemberDetailComponent,
        resolve: { user: MemberDetailResolver },
      },
      {
        path: 'member/edit',
        component: MemeberEditComponent,
        resolve: { user: MemberEditResolver },
        canDeactivate: [PreventUnsavedChanges],
      },
      { path: 'messages', component: MessagesComponent },
      {
        path: 'lists',
        component: ListsComponent,
        resolve: { users: ListsResolver },
      },
    ],
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
