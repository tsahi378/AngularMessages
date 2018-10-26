import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { MessageService } from './portfolio/message.service';
import { SahiMessage } from './portfolio/sahi-message.component';
import { SahiMessages } from './portfolio/sahi-messages.component';

@NgModule({
    declarations: [
        AppComponent,
        SahiMessage,
        SahiMessages
    ],
    imports: [BrowserModule,FormsModule,routing,HttpModule,ReactiveFormsModule],
    providers:[MessageService],
    bootstrap: [AppComponent]
})
export class AppModule {

}