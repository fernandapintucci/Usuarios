import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage  {

  constructor(public alertController: AlertController) { }

  async presentAlert(titulo: string, message: string) { 
    const alert = await this.alertController.create({
      header: titulo,
      message: message, 
      buttons: ['OK']
    });
    await alert.present();
  }

}
