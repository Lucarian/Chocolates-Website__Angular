import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';


@Injectable({
  providedIn: 'root'
})

export class DishService {

  constructor() { }

  // getDishes(): Observable<Dish[]> {
  //   return this.http.get<Dish[]>(baseURL + 'dishes');
  // }

  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe();
  }

  // getDishes(): Dish[] {
  //   return DISHES;
  // }

  // getDish(id: number): Observable<Dish> {
  //   return this.http.get<Dish>(baseURL + 'dishes/' + id);
  // }

  getDish(id: number): Observable<Dish> {
    return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe();
  }

  // getDish(id: number): Dish {
  //   return DISHES.filter((dish) => (dish.id === id))[0];
  // }
}
