import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';
import { fs } from 'fs';

// export const USERS = [];

export function createRandomUser() {
  const data = {
    userId: faker.datatype.uuid(),
    organization: faker.helpers.arrayElement(['Lendsqr', 'Lendstar', 'Irorun']),
    username: faker.name.findName(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number('+234-###-###-###'),
    dateJoined: faker.date.recent(),
    status: faker.helpers.arrayElement([
      'Inactive',
      'Active',
      'Blacklisted',
      'Pending',
    ]),
  }
  return data;

}
const writeToFile = () => {
  let DATA = []
  Array.from({ length: 501 }).forEach(() => {
      DATA.push(createRandomUser());
    });
     
    // write JSON string to a file
    fs.writeFile('lenders.json', JSON.stringify(DATA), (err) => {
      if (err) {
        throw err;
      }
      console.log('JSON data is saved.');
    });
}
