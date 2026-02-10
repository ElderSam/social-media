import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Modal } from './Modal';
import { PostForm } from './PostForm';
import { Button } from './Form';
import { updatePost } from '../api/server';
import type { PostType } from '../types/types';
import './EditPostModal.css';

interface EditPostModalProps {
  post: PostType;
  onClose: () => void;
}

export function EditPostModal({ post, onClose }: EditPostModalProps) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ title, content }: { title: string; content: string }) =>
      updatePost(post.id, title, content),
    onSuccess: () => {
      // Refresh posts list
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      onClose();
    },
  });

  const handleSubmit = (title: string, content: string) => {
    mutation.mutate({ title, content });
  };

  return (
    <Modal onClose={onClose}>
      <div className="edit-post-modal">
        <PostForm
          initialTitle={post.title}
          initialContent={post.content}
          onSubmit={handleSubmit}
          submitButtonText="Save"
          isSubmitting={mutation.isPending}
          formTitle="Edit item"
          className="edit-post-form"
          cancelButton={
            <Button
              text="Cancel"
              type="button"
              onClick={onClose}
              className="cancel-button"
            />
          }
        />
        {mutation.isError && (
          <p className="error-message">Error: {mutation.error.message}</p>
        )}
      </div>
    </Modal>
  );
}
