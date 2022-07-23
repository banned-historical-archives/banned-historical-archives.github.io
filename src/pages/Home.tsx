import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { txt } from '../../README.md';
import Stack from '@mui/material/Stack';

export default function About() {
  return (
    <Stack p={2}>
      <ReactMarkdown
        children={txt}
        remarkPlugins={[remarkGfm]}
      />
    </Stack>
  );
}