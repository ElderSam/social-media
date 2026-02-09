import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
 
import './CreatePost.css';
import { Button, FormTitle, InputGroup, TextAreaGroup } from './Form';
import { createPost } from '../api/server';

export function CreatePost() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: { title: string; content: string }) => {
      const username = localStorage.getItem('username') || 'Anonymous';
      return createPost(username, data.title, data.content);
    },
    onSuccess: () => {
      // Automatically refetch posts list
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      setTitle('');
      setContent('');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ title, content });
  };

  return (
    <div className='create-post'>
      <form onSubmit={handleSubmit} className="form-container">

        <FormTitle text="What’s on your mind?" />

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

        <Button
          text={mutation.isPending ? 'Creating...' : 'Create'}
          disabled={mutation.isPending || !title.trim() || !content.trim()}
        />
        {mutation.isError && <p>Error: {mutation.error.message}</p>}
      </form>
    </div>
  )
}