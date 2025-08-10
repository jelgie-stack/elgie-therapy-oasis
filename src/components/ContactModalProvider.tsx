import React, { useEffect } from 'react';
import { ContactModal } from './ContactModal';
import { useContactModal } from '@/hooks/useContactModal';
import { initializeContactBindings, destroyContactBindings } from '@/lib/contactBindings';

/**
 * Provider component that automatically manages contact modal bindings site-wide
 * Add this to your app root to enable automatic CTA binding
 */
export const ContactModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isOpen, openModal, closeModal, pageTitle, pageUrl } = useContactModal();

  useEffect(() => {
    // Initialize the binding system
    initializeContactBindings(openModal);

    // Clean up on unmount
    return () => {
      destroyContactBindings();
    };
  }, [openModal]);

  return (
    <>
      {children}
      <ContactModal
        isOpen={isOpen}
        onClose={closeModal}
        pageTitle={pageTitle}
        pageUrl={pageUrl}
      />
    </>
  );
};

export default ContactModalProvider;