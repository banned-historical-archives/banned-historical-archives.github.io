import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { txt } from '../../README.md';

export default function About() {
  return (
    <>
      <ReactMarkdown
        children={txt}
        remarkPlugins={[remarkGfm]}
      />
    </>
  );
}