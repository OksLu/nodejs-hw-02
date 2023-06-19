const mongoose = require("mongoose");

const contactsSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

const Contact = mongoose.model("contact", contactsSchema);

// const listContacts = async () => {
//   try {
//     const contacts = await readFile(contactsPath);

//     return JSON.parse(contacts);
//   } catch (err) {
//     console.log(`Something wrong ${err.message}`);
//   }
// };

// const getById = async (contactId) => {
//   try {
//     const id = String(contactId);
//     const allContacts = await listContacts();

//     const contact = allContacts.find((el) => el.id === id);

//     return contact || null;
//   } catch (err) {
//     console.log(`Something wrong ${err.message}`);
//   }
// };

// const removeContact = async (contactId) => {
//   try {
//     const id = String(contactId);
//     const allContacts = await listContacts();

//     const index = allContacts.findIndex((el) => el.id === id);

//     if (index === -1) {
//       return null;
//     }

//     const [contactToDelete] = allContacts.splice(index, 1);

//     await writeFile(contactsPath, JSON.stringify(allContacts));

//     return contactToDelete;
//   } catch (err) {
//     console.log(`Something wrong ${err.message}`);
//   }
// };

// const addContact = async (body) => {
//   try {
//     const allContacts = await listContacts();
//     const newContact = { id: nanoid(), ...body };

//     allContacts.push(newContact);

//     await writeFile(contactsPath, JSON.stringify(allContacts));

//     return newContact;
//   } catch (err) {
//     console.log(`Something wrong ${err.message}`);
//   }
// };

// const updateContact = async (contactId, body) => {
//   try {
//     const id = String(contactId);
//     const allContacts = await listContacts();
//     const index = allContacts.findIndex((el) => el.id === id);

//     if (index === -1) {
//       return null;
//     }

//     allContacts.splice(index, 1, { id: contactId, ...body });
//     await writeFile(contactsPath, JSON.stringify(allContacts));

//     return allContacts[index];
//   } catch (err) {
//     console.log(`Something wrong ${err.message}`);
//   }
// };

// module.exports = {
//   listContacts,
//   getById,
//   removeContact,
//   addContact,
//   updateContact,
// };

module.export = Contact;
