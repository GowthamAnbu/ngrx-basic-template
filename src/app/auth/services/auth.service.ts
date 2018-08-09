import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { User } from '../models/user';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLoggedin = false;
  constructor(private _http: HttpClient) {}

  login(requestPayload: any): Observable<User|any> {
    return this._http
    .post<User|any>(environment.api_url + 'authenticate', requestPayload)
    .pipe(
      tap(result => console.log(result)),
      map((body) => {
        return of(body['user']);
        /*  if (body.token) {
          this.isUserLoggedin = true;
          localStorage.setItem('token', body.token);
          if (body.institutes.length > 0 && body.user) {
            localStorage.setItem(
              'currentUserInstitutes',
              JSON.stringify(body.institutes)
            );
            const currentInstitute = body.institutes[0];
            const currentBranch = body.institutes[0].branches[0];
            this.setCurrentUser(body.user);
            this.setCurrentInstituteAndRole(currentInstitute, currentBranch);
            results = Observable.of(body.user);
            return body.user;
          }
          if (body.corporation.length > 0 && body.user) {
            localStorage.setItem(
              'currentCorporation',
              JSON.stringify(body.corporation)
            );
            const currentCorporation = body.corporation[0];
            const currentcorp_inst = currentCorporation.corp_institutes;
            currentcorp_inst.corporation_id = currentCorporation.id;
            currentcorp_inst.corporation_name =
              currentCorporation.corporation_name;
            currentcorp_inst.role_type = currentCorporation.pivot.role_type;
            localStorage.setItem(
              'currentCorporationInstitute',
              JSON.stringify(currentcorp_inst)
            );
            localStorage.setItem(
              'currentCorporation',
              JSON.stringify(currentCorporation)
            );
            this.setCurrentUser(body.user);
            this.setCurrentCorporationInst(currentcorp_inst);
            this.setCurrentCorporation(currentCorporation);
            results = Observable.of(body.user);
            return body.user;
          } else {
            return Observable.throw('Error in Signin');
          }
          // localStorage.setItem('currentCompany',JSON.stringify(body.company));
        } */
      }),
      catchError(error => {
        console.log(error);
        return of({});
      })
    );
  }
}
