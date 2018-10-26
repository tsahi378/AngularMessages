import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { NgForm } from '@angular/forms';
import { Message } from './message.model';


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers:[MessageService]

})
export class AppComponent {
    
    constructor(private MessageService: MessageService){}

    onSubmit(form:NgForm){
        //alert("adding message now");
        const message = new Message(form.value.content,form.value.message);
        //console.log('this message will get added : '+ message.message);
        //alert(' GOT message : '+ message.message)
        //once http method are added only 'addMessage' would not work without adding subscribe
        
        //validate message
        var messageArray = [];
        var validmessage = true;
        if (  message.content !== undefined || message.content !== null) {
            messageArray = message.content.split('');
            for(var i = 0; i < messageArray.length; i++) {
              if(!isNaN(parseInt(messageArray[i]))) {
                //alert(' invalid String MESSAGE '+messageArray[i]);
                validmessage = false;
                break;
              } else {
                //alert(' valid and store String MESSAGE '+messageArray[i]);
                //validmessage = true;
              }
            }
        }
        //alert("valid message : "+ validmessage);
        //if all good
        if (validmessage){
            this.MessageService.addMessage(message)
            .subscribe(
                data => console.log(data),
                error => console.error(error),
            );
        }
        form.resetForm();

        //else if message not valid
        //do not call above subscribe

    }


}