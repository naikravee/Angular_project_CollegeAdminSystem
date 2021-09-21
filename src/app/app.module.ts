import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SocialLoginModule, GoogleLoginProvider, SocialAuthServiceConfig } from "angularx-social-login";

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { DeleteStudentComponent } from './student/delete-student/delete-student.component';
import { AddDeptComponent } from './department/add-dept/add-dept.component';
import { DeleteDeptComponent } from './department/delete-dept/delete-dept.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AddStudentComponent,
    EditStudentComponent,
    DeleteStudentComponent,
    AddDeptComponent,
    DeleteDeptComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SocialLoginModule,
    LoginModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  entryComponents: [
    AddStudentComponent,
    EditStudentComponent,
    DeleteStudentComponent,
    AddDeptComponent,
    DeleteDeptComponent,
  ],
  providers: [ StudentService,
    {
      provide: "SocialAuthServiceConfig",
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '222752313579-gos95acj0d3gr4p6vc7avb5tjpdjc5sg.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
