import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>('/_models/user/');
    }

    getById(id: number) {
        return this.http.get('/_models/user/' + id);
    }

    create(user: User) {
        return this.http.post('/_models/user/', user);
    }

    update(user: User) {
        return this.http.put('/_models/user/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('/_models/user/' + id);
    }
}