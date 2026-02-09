import { useActionState, useState } from 'react';
import './CreatePost.css';
import { Button, FormTitle, InputGroup, TextAreaGroup } from './Form';

export function CreatePost() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [state, formAction, isPending] = useActionState(submitForm, null);

  async function submitForm(prevState: any, formData: FormData) {
    // const username = formData.get('username') as string;

    // Simulate API call
    // await saveUsername(username);
    
    // Return new state
    return { success: true };
    // return { success: true, username };
  }

  return (
    <div className='create-post'>
      <form action={formAction} className="form-container">

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
          text={'Create'}
          isPending={isPending}
          disabled={isPending || (!title.trim() || !content.trim())}
        />
      </form>
    </div>
  )
}