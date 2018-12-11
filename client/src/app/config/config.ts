import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public server = 'http://localhost:3412/';
    public apiUrl = 'users/';
    public serverWithApiUrl = this.server + this.apiUrl;
}
