import { QuotePage } from './../quote/quote';
import { Component } from '@angular/core';
import { Quote } from './../../data/quote.interface';
import { ModalController } from 'ionic-angular';

import { QuotesService } from '../../services/quotes.service';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(private quotesService: QuotesService,
    private modalCtrl: ModalController,
  private settingsService: SettingsService) { }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      console.log(remove);
      if (remove) {
        this.onRemoveFromFavorites(quote);
      }
    });
  }

  onRemoveFromFavorites(quote: Quote){
    this.quotesService.removeQuoteFromFavorites(quote);
    //this.quotes = this.quotesService.getFavoriteQuotes();
     const position = this.quotes.findIndex((quoteEl: Quote) =>{
       return quoteEl.id == quote.id;
     });
     this.quotes.splice(position, 1);
  }

  getBackground(){
    return this.settingsService.isAltBackground() ? 'alternativeBackground' : 'quoteBackground';
  }

}
