import { Component, OnInit } from '@angular/core';
import { ClienteService } from "../services/cliente.service";
import { ClienteInterface } from "../models/clienteInterface";
import { NgForm } from "@angular/forms/src/directives/ng_form";
@Component({
  selector: 'app-addclientes',
  templateUrl: './addclientes.component.html',
  styleUrls: ['./addclientes.component.css']
})
export class AddclientesComponent implements OnInit {
  cliente: ClienteInterface = {
    name: '',
    lastname: '',
    age:'',
    date:''
  }

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
  }
  addNewCliente(myForm: NgForm){
    console.log(this)
    this.clienteService.addCliente(this.cliente)
    myForm.resetForm();
  }

}
