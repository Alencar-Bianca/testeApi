/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
    private messages = [
        {id:1, text: 'Bianca'},
        {id:2, text: 'Amanda'},
    ]
    findAll(){
        return this.messages
    }
    findById(id: number){
        return this.messages.find((message) => message.id ==id)
    }

    create(message: {id:number, text: string}){
        return this.messages.push(message)
    }
}
