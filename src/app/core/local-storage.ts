import * as MemoryStorage from 'memorystorage'
import {Injectable} from '@angular/core';
import {Logger, LoggingService} from './log';

@Injectable()
export class LocalStorage {
  public localStorage:any;

  log: Logger;
  constructor(ls: LoggingService) {
    this.log = ls.getLogger('LocalStorage');
    if (this.supportsLocalStorage) {
      this.log.debug('does support local storage');
      this.localStorage = localStorage;
    } else {
      this.log.debug('does not support local storage');
      this.localStorage = new MemoryStorage('mustrace');
    }

  }

  public set(key:string, value: any): void {
    this.localStorage[key] = value;
  }

  public get(key:string): string | false {
    return this.localStorage[key] || false;
  }

  public setObject(key:string, value:any):void {
    this.localStorage[key] = JSON.stringify(value);
  }

  public getObject(key:string):any {
    return JSON.parse(this.localStorage[key] || '{}');
  }

  public remove(key:string):any {
    this.localStorage.removeItem(key);
  }

  private get supportsLocalStorage(): boolean {
    try {
      const x = '__storage_test__';
      localStorage.setItem(x, x);
      localStorage.removeItem(x);
      return true;
    } catch(e) {
      return false;
    }
  }
}

export class MockLocalStorage {
  public localStorage:{ [key: string]: any } = {};

  constructor() {
  }

  public set(key:string, value:string):void {
    this.localStorage[key] = value;
  }

  public get(key:string):string {
    return this.localStorage[key] || false;
  }

  public setObject(key:string, value:any):void {
    this.localStorage[key] = JSON.stringify(value);
  }

  public getObject(key:string):any {
    return JSON.parse(this.localStorage[key] || '{}');
  }

  public remove(key:string):any {
    delete this.localStorage[key];
  }
}

