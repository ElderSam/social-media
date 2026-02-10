import { useState } from 'react';
import { Button, FormTitle, InputGroup, TextAreaGroup } from './Form';
import './PostForm.css';

interface PostFormProps {
  initialTitle?: string;
  initialContent?: string;
  onSubmit: (title: string, content: string) => void;
  submitButtonText: string;
  isSubmitting: boolean;
  formTitle: string;
  cancelButton?: React.ReactNode;
  className?: string;
}

export function PostForm({
  initialTitle = '',
  initialContent = '',
  onSubmit,
  submitButtonText,
  isSubmitting,
  formTitle,
  cancelButton,
  className = ''
}: PostFormProps) {
  const [title, setTitle] = useState<string>(initialTitle);
  const [content, setContent] = useState<string>(initialContent);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, content);
  };

  return (
    <form onSubmit={handleSubmit} className={`form-container ${className}`}>
      <FormTitle text={formTitle} />

      <InputGroup
        inputTitle="Title"
        name="title"
        placeholder="Hello world"
        value={title}
        setValue={setTitle}
      />

      <TextAreaGroup
        inputTitle="Content"
        name="content"
        placeholder="Content here"
        value={content}
        setValue={setContent}
      />

      {cancelButton ? (
        <div className="post-form-buttons">
          {cancelButton}
          <Button
            text={isSubmitting ? 'Saving...' : submitButtonText}
            disabled={isSubmitting || !title.trim() || !content.trim()}
          />
        </div>
      ) : (
        <Button
          text={isSubmitting ? 'Saving...' : submitButtonText}
          disabled={isSubmitting || !title.trim() || !content.trim()}
        />
      )}
    </form>
  );
}
