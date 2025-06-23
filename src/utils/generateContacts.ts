import { faker } from '@faker-js/faker';

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export function generateContacts(count: number): Contact[] {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
  }));
}
