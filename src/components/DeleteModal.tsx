import { FormTitle, Button } from './Form';
import { Modal } from './Modal';
import './DeleteModal.css';

interface DeleteModalProps {
  onCancel: () => void;
  onDelete: () => void;
}

export function DeleteModal({ onCancel, onDelete }: DeleteModalProps) {
  
  return (
    <Modal onClose={onCancel}>
      <div className="delete-modal-content">
        <FormTitle text="Are you sure you want to delete this item?" />
        
        <div className="delete-modal-buttons">
          <Button 
            text="Cancel" 
            type="button" 
            onClick={onCancel} 
            className="cancel-button" 
          />
          <Button 
            text="Delete" 
            type="button" 
            onClick={onDelete} 
            className="delete-button" 
          />
        </div>
      </div>
    </Modal>
  );
}
