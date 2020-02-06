import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]> {
    return of(LEADERS).pipe(delay(2000));
    // new Promise(function(resolve){
    //   //Simulate server latency with 2 second delay
    //   setTimeout(() => resolve(LEADERS), 2000); 
    //  });
  }

  getLeader(id: string): Observable<Leader> {
    return of(LEADERS.filter((leader) => (leader.id === id))[0]).pipe(delay(2000));
    // new Promise(function(resolve){
    //   //Simulate server latency with 2 second delay
    //   setTimeout(() => resolve(LEADERS.filter((leader) => (leader.id === id))[0]), 2000); 
    //  });
  }

  getFeaturedLeader(): Observable<Leader> {
    return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000));
    // new Promise(function(resolve){
    //   //Simulate server latency with 2 second delay
    //   setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]), 2000); 
    //  });
  }
}
