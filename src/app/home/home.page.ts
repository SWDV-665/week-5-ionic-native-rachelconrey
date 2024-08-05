import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceryService } from '../services/grocery.service';
import { ShowPromptService } from '../services/show-prompt.service';
import { Item } from '../services/item/item.model';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-item-list',
  templateUrl: './home.page.html',
})

export class ItemListComponent {

  title = "Grocery List";  

  constructor(public toastCtrl: ToastController, public dataService: GroceryService, public showprompt: ShowPromptService, public alertCtrl: AlertController, public socialSharing: SocialSharing) {}

  loadItems() {
    return this.dataService.getItems();
  }

  editItem(item: Item, index: number) {
    console.log(item, "  Edit Item");
    const toast: Promise<HTMLIonToastElement> = this.toastCtrl.create({
      message: "Edit " + item.name,
      duration: 2000
    });
    toast.then(t => t.present());
    this.showprompt.showPrompt(item, index);
  }

  shareItem(item: Item, index: number) {
    console.log(item, "  Share Item");
    const toast: Promise<HTMLIonToastElement> = this.toastCtrl.create({
      message: "Share Item " + item.name,
      duration: 2000
    });
    toast.then(t => t.present());
    let message = "Grocery Item - Name: " + item.name + " Quantity: " + item.quantity;
    let subject = "Shared via Groceries App";

    this.socialSharing.share(message, subject).then(() => {
      console.log("Shared Successfully");
    }).catch((error) => {
      console.error("Error Sharing ", error);
    });

    }

  removeItem(item: Item, index: number) {
    console.log(item, " Removed");
    const toast: Promise<HTMLIonToastElement> = this.toastCtrl.create({
      message: item.name + " Removed",
      duration: 2000
    });
    toast.then(t => t.present());
    this.dataService.removeItem(index);
  }

  addItem() {
    console.log("Add Item");
    this.showprompt.showPrompt();
  }
}
