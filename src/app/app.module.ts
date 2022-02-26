import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrgChartPrimengComponent } from './org-chart-primeng/org-chart-primeng.component';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, OrgChartPrimengComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    OrganizationChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
