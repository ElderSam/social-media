import { createPortal } from 'react-dom';
import type { ReactNode } from 'react';
import './Modal.css';

interface ModalProps {
  children: ReactNode;
  onClose?: () => void;
  showOverlay?: boolean;
  className?: string;
}

export function Modal({ children, onClose, showOverlay = true, className = '' }: ModalProps) {
  const content = (
    <>
      {showOverlay && <div className="modal-overlay" onClick={onClose} />}
      <div className={`modal ${className}`}>
        {children}
      </div>
    </>
  );

  return showOverlay ? createPortal(content, document.body) : content;
}
