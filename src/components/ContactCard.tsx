import { Contact } from "@/utils/generateContacts";

interface ContactCardProps {
  contact: Contact;
}

export default function ContactCard({ contact }: ContactCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="font-semibold text-lg mb-2">{contact.name}</h2>
      <p className="text-gray-600">{contact.email}</p>
      <p className="text-gray-600">{contact.phone}</p>
    </div>
  );
}
