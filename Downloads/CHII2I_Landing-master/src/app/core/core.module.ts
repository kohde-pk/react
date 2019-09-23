import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { DataService } from './services/data.service';
import { NotificationService } from './services/notification.service';
import { BreakpointService } from './services/breakpoint.service';
import { IBreakpointConfig } from '../shared/interfaces/IBreakpoint';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const moduleExports = [
  SideNavComponent,
  BannerComponent,
  HeaderComponent,
  LandingPageComponent
];
const coreServices = [
  DataService,
  NotificationService
];


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    NotificationService,
    BreakpointService
  ],
  exports: [...moduleExports],
  declarations: [
    SideNavComponent,
    BannerComponent,
    HeaderComponent,
    LandingPageComponent
  ]
})
export class CoreModule {
  static forRoot(config: IBreakpointConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ...coreServices,
        { provide: BreakpointService, useClass: BreakpointService, useValue: config }
      ]
    };
  }


}
