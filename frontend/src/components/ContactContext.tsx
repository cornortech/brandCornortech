"use client";

import React, { createContext, useContext, useState } from "react";

interface ContactContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const ContactProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ContactContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContactModal = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContactModal must be used within a ContactProvider");
  }
  return context;
};
