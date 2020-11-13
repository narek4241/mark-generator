import { CustomMap } from './CustomMap';
import { User } from './User';
import { Company } from './Company';

const map = new CustomMap('map');

const user = new User();
const company = new Company();

map.addItemMark(user);
map.addItemMark(company);
