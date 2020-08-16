import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getdata(data: string) {
    return this.httpClient.get(data, { responseType: 'json' });
  }

  registerUser(user: any) {
    console.log('inside reg user service');
    return this.httpClient.post('RESTAPI/webapi/myresource/regUser/', user);
  }

  getUser(userName: any, password: any) {
    return this.httpClient.get('RESTAPI/webapi/myresource/UserLogin/' + userName + '/' + password);
  }

}