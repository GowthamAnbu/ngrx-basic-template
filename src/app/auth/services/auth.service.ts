import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { User } from '../models/user';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  getCurrentUser(): User {
    return <User>JSON.parse(localStorage.getItem('currentUser'));
  }

  setCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  setCurrentInstituteAndRole(currentInstitute, currentBranch) {
    const currentLogUser = this.getCurrentUser();
    localStorage.setItem('currentInstitute', JSON.stringify(currentInstitute));
    localStorage.setItem('currentBranch', JSON.stringify(currentBranch));
    if (currentInstitute.role_type === ('Mother' || 'Father' || 'guardian')) {
        localStorage.setItem('currentRole', 'Parent');
    } else {
    localStorage.setItem('currentRole', currentInstitute.pivot.role_type);
    }
    currentLogUser.currentInstitute = currentInstitute;
    currentLogUser.currentBranch = currentBranch;
    currentLogUser.currentRole = localStorage.getItem('currentRole');
    this.setCurrentUser(currentLogUser);
    // this._authEvent.next(currentLogUser);
  }

  setCurrentCorporationInst(currentCorporationInst) {
    const currentLogUser = this.getCurrentUser();
    localStorage.setItem('currentRole', 'Corp Admin');
    currentLogUser.currentInstitute = currentCorporationInst;
    currentLogUser.currentRole = localStorage.getItem('currentRole');
    localStorage.setItem('currentCorporationInstitute', JSON.stringify(currentCorporationInst));
    this.setCurrentUser(currentLogUser);
  }

  setCurrentCorporation(currentCorporation) {
    const currentUser = this.getCurrentUser();
    localStorage.setItem('currentRole', 'Corp Admin');
    currentUser.currentCorporation = currentCorporation;
    currentUser.currentRole = localStorage.getItem('currentRole');
    localStorage.setItem('currentCorporation', JSON.stringify(currentCorporation));
    this.setCurrentUser(currentUser);
  }

  isLoggedIn(): Observable<boolean> {
    return of(!!localStorage.getItem('currentUser'));
  }

  login(requestPayload: any): Observable<User|any> {
    return this._http
    .post<User|any>(environment.api_url + 'authenticate', requestPayload)
    .pipe(
      tap(result => console.log(result)),
      map((body) => {
         if (body.token) {
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
            return body;
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
            return body;
          }
        }
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(error) ;
      })
    );
  }
}
