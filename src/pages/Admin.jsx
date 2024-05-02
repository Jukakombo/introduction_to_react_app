import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import axios from "axios";
// const url = "http://localhost:5000/contacts";
const Admin = () => {
  const [contacts, setContacts] = useState([]);
  const [contactId, setContactId] = useState(null);
  const [modifierContact, setModifierContact] = useState("");
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/contacts");
    setContacts(res.data);
  };
  // suprimer l-id
  const deleteContact = async (id) => {
    axios.delete("http://localhost:5000/contacts/" + id);
    fetchData();
  };
  // modifier le contact function
  const modif_contact = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:5000/contacts/${contactId}`,
      modifierContact
    );
    fetchData();
    setModifierContact("");
    setOpenForm(false);
  };

  // on change
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setModifierContact({ ...modifierContact, [name]: value });
  };
  return (
    <>
      <Header />
      <div className="">
        <h1>Hello User Welcome!!!✨✨💖</h1>
        {/* form */}
        {openForm && (
          <form onSubmit={modif_contact} className="modify_contact">
            <input
              type="text"
              name="name"
              value={modifierContact.name}
              placeholder="Name"
              onChange={handleOnChange}
            />
            <input
              type="text"
              name="email"
              value={modifierContact.email}
              placeholder="email"
              onChange={handleOnChange}
            />
            <input
              type="text"
              name="phone"
              onChange={handleOnChange}
              value={modifierContact.phone}
              placeholder="phone"
            />
            <input
              type="text"
              name="subject"
              value={modifierContact.subject}
              placeholder="subject"
              onChange={handleOnChange}
            />
            <textarea
              rows={5}
              type="text"
              name="message"
              value={modifierContact.message}
              placeholder="message"
              onChange={handleOnChange}
            />
            <button type="submit">Modify contact</button>
          </form>
        )}
        {contacts.length > 0 &&
          contacts
            .slice(0)
            .reverse()
            .map((x) => (
              <div
                key={x.id}
                className=""
                style={{
                  border: "1px solid white",
                  padding: "20px",
                  margin: "20px 0",
                }}
              >
                <span>Name: {x.name}</span>
                <br />
                <span>Email: {x.email}</span>
                <br />
                <span>Telephone Number: {x.phone}</span>
                <br />
                <span>Subject: {x.subject}</span>
                <br />
                <span>Message body: {x.message}</span>
                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "20px",
                  }}
                >
                  <button
                    onClick={() => {
                      setContactId(x.id);
                      setModifierContact(x);
                      setOpenForm(true);
                    }}
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      padding: "10px",
                      borderRadius: "15px",
                    }}
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => deleteContact(x.id)}
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      padding: "10px",
                      borderRadius: "15px",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
      </div>
      <Footer />
    </>
  );
};

export default Admin;
