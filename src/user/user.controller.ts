import { Controller, Get } from "@nestjs/common";

@Controller('/user')
export class UserController{
    @Get()
    getUsers(){
        return 'I am from user controller'
    }
}