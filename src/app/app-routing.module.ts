import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";
import {EquipementComponent} from "./views/admin/equipement/equipement.component";
import { DepechesComponent } from "./views/admin/depeches/depeches.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";
import { AuthGuard } from "./services/_helpers/auth.guard";
import { DepUserComponent } from "./views/admin/dep-user/dep-user.component";
import { ListDepAgComponent } from "./views/admin/list-dep-ag/list-dep-ag.component";
import { UpdateDepecheComponent } from "./views/admin/update-depeche/update-depeche.component";


const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent,  canActivate: [AuthGuard]},
      { path: "equipement", component: EquipementComponent,    canActivate: [AuthGuard]},
      { path: "settings", component: SettingsComponent,  canActivate: [AuthGuard], data: {role: 'Admin'}},
      { path: "tables", component: TablesComponent,   canActivate: [AuthGuard], data: {role: 'Admin'}},
      { path: "maps", component: MapsComponent,    canActivate: [AuthGuard]},
      { path: "dep-user", component: DepUserComponent,    canActivate: [AuthGuard]},
      { path: "depeches", component: DepechesComponent,    canActivate: [AuthGuard], data: {role: 'Admin'}},
      { path: "list-dep-ag", component: ListDepAgComponent,    canActivate: [AuthGuard]},
      { path: "update-depeche/:id", component: UpdateDepecheComponent,    canActivate: [AuthGuard], data: {role: 'Admin'}},
    
      

      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  // no layout views
  { path: "profile/:id", component: ProfileComponent,  canActivate: [AuthGuard] },
  { path: "landing", component: LandingComponent,  canActivate: [AuthGuard] },
  { path: "", component: IndexComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
