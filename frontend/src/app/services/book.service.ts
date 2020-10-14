import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../interfaces/book';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class LeadService {

    constructor(private http: HttpClient) { }

    getAllbooks(): Observable<Book[]> {
        return this.http.get<Book[]>(`http://127.0.0.1:8000/api/books/`);
    }
}
