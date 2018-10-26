import { Component, OnInit } from "@angular/core";

import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
    selector: 'sahi-messages',
    template: `
            <sahi-message
                   [message]="message"
                    *ngFor="let message of messages"></sahi-message>
        
    `
})
export class SahiMessages implements OnInit {
    messages: Message[];

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        console.log('ng Oninit called get messages');
        this.messageService.getMessages()
            .subscribe(
                (messages: Message[]) => {
                    this.messages = messages;
                }
            );
    }
}