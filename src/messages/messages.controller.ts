/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
// eslint-disable-next-line @typescript-eslint/no-empty-function
constructor(private messageService: MessagesService) {}
    @Get()
    findAll(){
        return this.messageService.findAll();
    }

    @Get(':id')
    findById(@Param() params){
        return this.messageService.findById(params.id);
    }

    @Post()
    create(@Body() body: any){
        return this.messageService.create(body);
    }
}
