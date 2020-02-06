import { Component, OnInit } from '@angular/core';
import { IProducto, ITecnologia, IInmobiliaria, IMotor } from '../interfaces';
import { ToastController } from '@ionic/angular';
import { ProductoService } from '../services/producto.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { UsuarioService } from '../services/usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-megustas',
  templateUrl: './megustas.page.html',
  styleUrls: ['./megustas.page.scss'],
})
export class MegustasPage implements OnInit {

  id: string;

  usuarios: [] = [] ;

  constructor(private _activatedRoute: ActivatedRoute, private _usuarioService: UsuarioService) { }
  ngOnInit() {

    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    let ref = this._usuarioService.getUsuario(this.id);

    ref.once("value", snapshot=>{
      this.usuarios = snapshot.val();
  });

  }

    
  }


