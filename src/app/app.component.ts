import { Component, Injectable } from '@angular/core';
import {Friend} from './Friend';
import {NgForm} from '@angular/forms';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Testy';
  description = 'Very good !!!';

  constructor(private _http: Http){}
  private headers = new Headers({'Content-Type': 'application/json'});

  onSubmit(form: NgForm): Promise <Friend>{
    return this._http.post('http://laramang.com/public/add-friend', JSON.stringify(form.value), {headers: this.headers})
     .toPromise()
             .then(res => res.json().data)
              .catch(this.handleError);
}
private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
  }

}
