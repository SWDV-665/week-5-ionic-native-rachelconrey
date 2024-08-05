import { Injectable } from '@angular/core';
import { GroceryService } from '../services/grocery.service';
import { AlertController, ModalController } from '@ionic/angular';
import { Item } from './item/item.model';
import { QuantitySelectModalComponent } from '../quantity-select-modal/quantity-select-modal.component';

@Injectable({
  providedIn: 'root'
})

export class ShowPromptService {
  constructor(public dataService: GroceryService, public alertCtrl: AlertController, public modalCtrl: ModalController) { }
  async showPrompt(item?: Item, index?: number) {
    const modal = this.modalCtrl.create({
      component: QuantitySelectModalComponent,
      componentProps: { item: item || { item: { name: '', quantity: null } } }
    });
      
      (await modal).onDidDismiss().then((result) => {
        if (result.data) {
          if (index !== undefined) {
            this.dataService.editItem(result.data, index);
          } else {
            this.dataService.addItem(result.data);
          }
        }
      });
  
      await (await modal).present();
    }
  }