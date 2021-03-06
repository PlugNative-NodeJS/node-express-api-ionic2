import {OnInit} from 'angular2/core';
import {Page, NavController, NavParams} from 'ionic-angular';
import {PropertyDetailsPage} from '../property-details/property-details';
import {PropertyService} from '../../services/property-service';

@Page({
    templateUrl: 'build/pages/property-list/property-list.html'
})
export class PropertyListPage {

    static get parameters() {
        return [[NavController], [NavParams], [PropertyService]];
    }

    constructor(nav, navParams, propertyService) {
        this.nav = nav;
        this.propertyService = propertyService;
        this.selectedItem = navParams.get('item');
    }

    ngOnInit() {
        this.propertyService.findAll().subscribe(
            data => this.properties = data
        );
    }

    itemTapped(event, property) {
        this.nav.push(PropertyDetailsPage, {
            property: property
        });
    }

}