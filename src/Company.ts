import faker from 'faker';
import { Item } from './CustomMap';

export class Company implements Item {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: 'red';

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();

    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<div>
    <h1>Company Name: ${this.companyName}</h1>
    <h3>Catch Phrase: ${this.catchPhrase}</h3>
  </div>`;
  }
}
