import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
 
import './CreatePost.css';
import { PostForm } from './PostForm';
import { createPost } from '../api/server';
import { useToast } from '../contexts/ToastContext';

export function CreatePost() {
  const queryClient= useQueryClient();
  const [formKey, setFormKey] = useState(0);
  const { showToast } = useToast();

  const mutation = useMutation({
    mutationFn: (data: { title: string; content: string }) => {
      const username = localStorage.getItem('username') || 'Anonymous';
      return createPost(username, data.title, data.content);
    },
    onSuccess: () => {
      // Automatically refetch posts list
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      // Reset form by changing key
      setFormKey(prev => prev + 1);
      // Show success toast
      showToast('Post created successfully!', 'success');
    },
    onError: (error) => {
      // Show error toast
      showToast(`Failed to create post: ${error.message}`, 'error');
    },
  });

  const handleSubmit = (title: string, content: string) => {
    mutation.mutate({ title, content });
  };

  return (
    <div className='create-post'>
      <PostForm
        key={formKey}
        onSubmit={handleSubmit}
        submitButtonText="Create"
        isSubmitting={mutation.isPending}
        formTitle="What's on your mind?"
      />
    </div>
  )
}
