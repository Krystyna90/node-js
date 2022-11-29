// const fs = require("fs/promises");
// const contactsPath = "./db/contacts.json";

// const fileOperations = async ({ filepath, action, data }) => {
//   switch (action) {
//     case "read":
//       const text = await fs.readFile(filepath, "utf-8");
//       console.log(text);
//       break;

//     case "add":
//       await fs.appendFile(filepath, data);
//       break;

//     case "replace":
//       const result = await fs.writeFile(filepath, data);
//       break;

//     default:
//       console.log("Unknown action");
//   }
// };
// fileOperations({ contactsPath, action: "read" });
// fileOperations({ contactsPath, action: "add", data: "New contact right here" });

//  TODO: задокументировать каждую функцию
function listContacts() {
  // ...твой код
}

function getContactById(contactId) {
  //   // ...твой код
}

function removeContact(contactId) {
  //   // ...твой код
}

function addContact(name, email, phone) {
  //   // ...твой код
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
