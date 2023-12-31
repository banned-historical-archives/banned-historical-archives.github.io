import { exec, execSync } from 'node:child_process';
import { join } from 'node:path/posix';

export default async function pdf2image({
  pdf_path,
  page,
  dpi = 150,
  output = join(process.cwd(), 'tmp.png'),
}: {
  pdf_path: string;
  page: number;
  dpi?: number;
  output?: string;
}): Promise<string> {
  const py_command = `python3 backend/pdf2image.py ${pdf_path} ${page} ${dpi} ${output}`;
  execSync(py_command).toString();
  return output;
}
