import { useState } from 'react';
import './CreatePost.css';
import { FormTitle, InputGroup, TextAreaGroup } from './Form';

export function CreatePost() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  return (
    <div className='create-post'>
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
    </div>
  )
}