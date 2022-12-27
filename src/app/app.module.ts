import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";
import { DepechesComponent } from "./views/admin/depeches/depeches.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";

// components for views and layouts

import { AdminNavbarComponent } from "./components/navbars/admin-navbar/admin-navbar.component";
import { AuthNavbarComponent } from "./components/navbars/auth-navbar/auth-navbar.component";
import { CardBarChartComponent } from "./components/cards/card-bar-chart/card-bar-chart.component";
import { CardLineChartComponent } from "./components/cards/card-line-chart/card-line-chart.component";
import { CardPageVisitsComponent } from "./components/cards/card-page-visits/card-page-visits.component";
import { CardProfileComponent } from "./components/cards/card-profile/card-profile.component";
import { CardSettingsComponent } from "./components/cards/card-settings/card-settings.component";
import { CardSocialTrafficComponent } from "./components/cards/card-social-traffic/card-social-traffic.component";
import { CardStatsComponent } from "./components/cards/card-stats/card-stats.component";
import { CardTableComponent } from "./components/cards/card-table/card-table.component";
import { FooterAdminComponent } from "./components/footers/footer-admin/footer-admin.component";
import { FooterComponent } from "./components/footers/footer/footer.component";
import { FooterSmallComponent } from "./components/footers/footer-small/footer-small.component";
import { HeaderStatsComponent } from "./components/headers/header-stats/header-stats.component";
import { IndexNavbarComponent } from "./components/navbars/index-navbar/index-navbar.component";
import { MapExampleComponent } from "./components/maps/map-example/map-example.component";
import { IndexDropdownComponent } from "./components/dropdowns/index-dropdown/index-dropdown.component";
import { TableDropdownComponent } from "./components/dropdowns/table-dropdown/table-dropdown.component";
import { PagesDropdownComponent } from "./components/dropdowns/pages-dropdown/pages-dropdown.component";
import { NotificationDropdownComponent } from "./components/dropdowns/notification-dropdown/notification-dropdown.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { UserDropdownComponent } from "./components/dropdowns/user-dropdown/user-dropdown.component";
import { CardParametersComponent } from './components/cards/card-parameters/card-parameters.component';
import { EquipementComponent } from './views/admin/equipement/equipement.component';
import { CardEquipementComponent } from './components/cards/card-equipement/card-equipement.component';
import { authInterceptorProviders } from "./services/_helpers/auth.interceptor";
import { AuthGuard } from "./services/_helpers/auth.guard";
import { FormsModule } from "@angular/forms";
import { RegisterService } from "./services/register/register.service";
import { HttpClientModule } from '@angular/common/http';
import { DepUserComponent } from './views/admin/dep-user/dep-user.component';
import { CardDepechesComponent } from './components/cards/card-depeches/card-depeches.component';


import { from } from "rxjs";

import { CardListeDepComponent } from './components/cards/card-liste-dep/card-liste-dep.component';
import { DepechesDropdownComponent } from './components/dropdowns/depeches-dropdown/depeches-dropdown.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { ListDepAgComponent } from './views/admin/list-dep-ag/list-dep-ag.component';
import { CardListDepAgComponent } from './components/cards/card-list-dep-ag/card-list-dep-ag.component';
import { UpdateDepecheComponent } from './views/admin/update-depeche/update-depeche.component';
import { CardUpdateDepecheComponent } from './components/cards/card-update-depeche/card-update-depeche.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotifiDropdownComponent } from './components/dropdowns/notifi-dropdown/notifi-dropdown.component';
import { ChartsModule } from 'ng2-charts';
import { AlertValidationComponent } from './components/cards/alert-validation/alert-validation.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardBarChartComponent,
    CardLineChartComponent,
    IndexDropdownComponent,
    PagesDropdownComponent,
    TableDropdownComponent,
    NotificationDropdownComponent,
    UserDropdownComponent,
    SidebarComponent,
    FooterComponent,
    FooterSmallComponent,
    FooterAdminComponent,
    CardPageVisitsComponent,
    CardProfileComponent,
    CardSettingsComponent,
    CardSocialTrafficComponent,
    CardStatsComponent,
    CardTableComponent,
    HeaderStatsComponent,
    MapExampleComponent,
    AuthNavbarComponent,
    AdminNavbarComponent,
    IndexNavbarComponent,
    AdminComponent,
    AuthComponent,
    MapsComponent,
    SettingsComponent,
    TablesComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    LandingComponent,
    ProfileComponent,
    CardParametersComponent,
    EquipementComponent,
    CardEquipementComponent,
    DepUserComponent,
    CardDepechesComponent,
    DepechesComponent,
    CardListeDepComponent,
    DepechesDropdownComponent,
    ListDepAgComponent,
    CardListDepAgComponent,
    UpdateDepecheComponent,
    CardUpdateDepecheComponent,
    NotifiDropdownComponent,
    AlertValidationComponent,
    

    
  

  
  ],
  imports: [BrowserModule, 
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule, 
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    FilterPipeModule,
    BrowserAnimationsModule,
    ChartsModule,
    MatDialogModule,
    MatSnackBarModule
 
   ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [authInterceptorProviders, RegisterService,{
    provide: MatDialogRef,
    useValue: {}
  },
],
  bootstrap: [AppComponent],
})
export class AppModule {}
