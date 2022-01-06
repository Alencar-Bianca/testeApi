/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import path from 'path';

@Controller('courses')
export class CoursesController {
    @Get()
    findAll(): string{
        return 'Socorro Deus';
    }

    @Get( ':id')
    findOne(@Param('id') id: string){
        return `Socorro #${id}`
    }
}
