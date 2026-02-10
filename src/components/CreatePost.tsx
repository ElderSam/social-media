import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
 
import './CreatePost.css';
import { PostForm } from './PostForm';
import { createPost } from '../api/server';

export function CreatePost() {
  const queryClient= useQueryClient();
  const [formKey, setFormKey] = useState(0);

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
      {mutation.isError && <p>Error: {mutation.error.message}</p>}
    </div>
  )
}
