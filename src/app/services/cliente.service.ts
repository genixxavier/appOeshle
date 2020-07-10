import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument  } from "angularfire2/firestore";
import { ClienteInterface } from "../models/clienteInterface.js";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clienteCollection: AngularFirestoreCollection<ClienteInterface>
  clientes: Observable<ClienteInterface[]>
  clienteDoc: AngularFirestoreDocument<ClienteInterface>

  constructor(public afs: AngularFirestore) {
    //this.clientes = afs.collection('clientes').valueChanges()
    this.clienteCollection = afs.collection<ClienteInterface>('clientes')
    this.clientes = this.clienteCollection.snapshotChanges().pipe(
      map(actions => actions.map( a =>{
        const data = a.payload.doc.data() as ClienteInterface
        const id = a.payload.doc.id

        return {id, ...data}
      }))
    )
   }
   
   getClientes(){
     return this.clientes
   }

   addCliente(cliente: ClienteInterface){
      console.log(cliente)
      this.clienteCollection.add(cliente)
      
   }

   deleteCliente(cliente:ClienteInterface){
     this.clienteDoc = this.afs.doc(`clientes/${cliente.id}`)
     this.clienteDoc.delete()
   }
}


