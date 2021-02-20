import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from '@firebase/auth-types';

@Component({
  selector: 'dps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  chatMessages: Observable<any[]>;
  user: User;
  credentials = {
    email: '',
    password: '',
    displayName: '',
  };
  newAccount = true;
  topicDoc: { id: string; topic: string };
  editingTopic = false;

  constructor(private db: AngularFirestore, private afa: AngularFireAuth) {
    this.chatMessages = db
      .collection('chatMessages', (col) => col.orderBy('time'))
      .valueChanges();
    this.afa.user.subscribe((user) => (this.user = user));

    this.db
      .collection<{ topic: string }>('meta', (meta) =>
        meta.where('metaField', '==', 'topic').limit(1)
      )
      .snapshotChanges()
      .forEach((snapShot) => {
        this.topicDoc = {
          id: snapShot[0].payload.doc.id,
          topic: snapShot[0].payload.doc.data().topic,
        };
      });
  }

  sendMessage(input: HTMLInputElement) {
    this.db
      .collection('chatMessages')
      .add({
        from: this.user.displayName,
        message: input.value,
        time: Date.now(),
      })
      .then(() => {
        input.value = '';
      });
  }

  createUser() {
    this.afa
      .createUserWithEmailAndPassword(
        this.credentials.email,
        this.credentials.password
      )
      .then((auth) =>
        auth.user.updateProfile({
          displayName: this.credentials.displayName,
          photoURL: '',
        })
      );
  }

  logout() {
    this.afa.signOut();
  }

  login() {
    this.afa.signInWithEmailAndPassword(
      this.credentials.email,
      this.credentials.password
    );
  }

  changeTopic(input: HTMLInputElement) {
    this.db
      .collection('meta')
      .doc(this.topicDoc.id)
      .update({ topic: input.value })
      .then(() => {
        input.value = '';
        this.editingTopic = false;
      });
  }
}
