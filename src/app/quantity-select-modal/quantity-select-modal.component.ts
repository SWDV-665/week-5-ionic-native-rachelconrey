import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-quantity-select-modal',
  templateUrl: './quantity-select-modal.component.html',
  styleUrls: ['./quantity-select-modal.component.scss'],
})
export class QuantitySelectModalComponent {
  @Input() item: any = { name: '', quantity: null };

  quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private modalCtrl: ModalController) { }

  save() {
    this.modalCtrl.dismiss(this.item);
  }

  cancel() {
    this.modalCtrl.dismiss();
  }
}

