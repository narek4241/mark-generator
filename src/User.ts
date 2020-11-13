import faker from 'faker';
import { Item } from './CustomMap';

export class User implements Item {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: 'red';

  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<div>
    <h3>Company Name: ${this.name}</h3>
  </div>`;
  }
}
