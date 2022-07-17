import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'

export function render(url: string, context: any) {
  const SR = StaticRouter as any;
  return ReactDOMServer.renderToString(
    <SR location={url} context={context}>
      <App />
    </SR>
  )
}