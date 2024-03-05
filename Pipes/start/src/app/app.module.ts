import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { StudentService } from './Services/student.service';
import { PercentagePipe } from './Custom Pipe/percentage.pipe';
import { FormsModule } from '@angular/forms';
import { filterPipe } from './Custom Pipe/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PercentagePipe,
    filterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
