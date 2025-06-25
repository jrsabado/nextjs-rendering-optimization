'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { generateContacts, Contact } from '@/utils/generateContacts';
import ContactCard from './ContactCard';
import SearchInput from './SearchInput';
import debounce from 'lodash.debounce';

export default function ContactList() {
  const [data, setData] = useState<Contact[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const contacts = generateContacts(5000); 
    setData(contacts);
  }, []);

//   const filtered = data.filter(contact =>
//     contact.name.toLowerCase().includes(search.toLowerCase())
//   );

  const handleChange = useCallback(
    debounce((value: string) => {
      setSearch(value);
    }, 300),
    []
  );

  const filtered = useMemo(() => {
    return data.filter(contact =>
      contact.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, data]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6">Distance Assessment - Contact List</h1>

      <SearchInput onChange={handleChange} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
        {filtered.map(contact => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
}
