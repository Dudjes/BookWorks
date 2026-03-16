import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext.tsx";
import BaseHeader from "@/components/baseHeader.tsx";
import MainInput from "@/components/mainInput.tsx";
import Modal from "react-modal";
import { useState } from "react";
import styles from "@/css/debitor.module.css";
import { IoIosCloseCircleOutline } from "react-icons/io";

Modal.setAppElement("#root");

export default function Debitors() {
  const { user } = useUser();
  const [modalVisible, setModalVisible] = useState(false);

  const [form, setForm] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    kvk: "",
    address: "",
    postalCode: "",
    city: "",
    country: "Nederland",
    vatNumber: "",
    iban: "",
    paymentTerm: "30",
  });

  const setField = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: save form data
    setModalVisible(false);
  };

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <BaseHeader
        title="Debiteuren"
        buttonText="Nieuwe debiteur"
        searchPlaceholder="Zoek debiteuren..."
        subtitle="Beheer en maak nieuwe debiteuren"
        searchAriaLabel="Zoek debiteuren"
        onButtonClick={() => setModalVisible(true)}
      />

      <Modal
        isOpen={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <div className={styles.modalContainer}>
          <div className={styles.modalHeader}>
            <h3>Nieuwe klant toevoegen</h3>
            <IoIosCloseCircleOutline
              size={30}
              style={{ cursor: "pointer" }}
              onClick={() => setModalVisible(false)}
            />
          </div>

          <form className="debitor-form-grid" onSubmit={handleSubmit}>
            <MainInput
              label="Bedrijfsnaam"
              required
              placeholder="Bijv. Acme BV"
              value={form.companyName}
              onChangeText={(v) => setField("companyName", v)}
              fullWidth
            />
            <MainInput
              label="Contactpersoon"
              placeholder="Naam contactpersoon"
              value={form.contactPerson}
              onChangeText={(v) => setField("contactPerson", v)}
            />
            <MainInput
              label="E-mailadres"
              required
              type="email"
              placeholder="email@bedrijf.nl"
              value={form.email}
              onChangeText={(v) => setField("email", v)}
            />
            <MainInput
              label="Telefoonnummer"
              placeholder="+31 20 123 4567"
              value={form.phone}
              onChangeText={(v) => setField("phone", v)}
            />
            <MainInput
              label="KvK-nummer"
              placeholder="12345678"
              value={form.kvk}
              onChangeText={(v) => setField("kvk", v)}
            />
            <MainInput
              label="Adres"
              placeholder="Straat 123"
              value={form.address}
              onChangeText={(v) => setField("address", v)}
              fullWidth
            />
            <MainInput
              label="Postcode"
              placeholder="1234 AB"
              value={form.postalCode}
              onChangeText={(v) => setField("postalCode", v)}
            />
            <MainInput
              label="Plaats"
              placeholder="Amsterdam"
              value={form.city}
              onChangeText={(v) => setField("city", v)}
            />
            <MainInput
              label="Land"
              placeholder="Nederland"
              value={form.country}
              onChangeText={(v) => setField("country", v)}
            />
            <MainInput
              label="BTW-nummer"
              placeholder="NL123456789B01"
              value={form.vatNumber}
              onChangeText={(v) => setField("vatNumber", v)}
            />
            <MainInput
              label="IBAN"
              placeholder="NL12BANK0123456789"
              value={form.iban}
              onChangeText={(v) => setField("iban", v)}
            />
            <MainInput
              label="Betalingstermijn (dagen)"
              type="number"
              placeholder="30"
              value={form.paymentTerm}
              onChangeText={(v) => setField("paymentTerm", v)}
            />

            <div className={styles.actionContainer}>
                <button 
                    type="button" 
                    onClick={() => setModalVisible(false)}
                    className={styles.cancelButton}
                >
                    Annuleren
                </button>
                <button type="submit" className={styles.submitButton}>Opslaan</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}