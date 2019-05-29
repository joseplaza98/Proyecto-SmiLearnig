import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
    constructor(public afDB: AngularFireDatabase,
        public afAuth: AngularFireAuth) {
    }

    Logout(){
        
        return this.afAuth.auth.signOut();
    }
}