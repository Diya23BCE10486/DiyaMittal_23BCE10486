const Contact = require("../models/Contact");

exports.getContacts = async (req, res) => {
  const contacts = await Contact.find({ userId: req.user.id });
  res.json(contacts);
};

exports.addContact = async (req, res) => {
  const { name, email, phone } = req.body;
  const contact = new Contact({ userId: req.user.id, name, email, phone });
  await contact.save();
  res.json({ msg: "Contact added", contact });
};

exports.updateContact = async (req, res) => {
  const { id } = req.params;
  const updated = await Contact.findOneAndUpdate(
    { _id: id, userId: req.user.id },
    req.body,
    { new: true }
  );
  res.json(updated);
};

exports.deleteContact = async (req, res) => {
  const { id } = req.params;
  await Contact.findOneAndDelete({ _id: id, userId: req.user.id });
  res.json({ msg: "Contact deleted" });
};
