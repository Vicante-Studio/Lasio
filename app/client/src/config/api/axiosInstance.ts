import axios from 'axios'

/* In dev, leave baseURL empty so requests are relative (e.g. '/api/listings') and go through Vite's dev server proxy, this works correctly whether you're on your local machine or in a Codespace, since the proxy runs inside the same environment as the backend. */

 /* In production, use the explicit VITE_API_URL (e.g. your Render backend) since there's no dev server or proxy to rely on. */

const api = axios.create({
  baseURL: import.meta.env.DEV ? "" : import.meta.env.VITE_API_URL, //import.meta.env.DEV -> is built-in to be true when "npm run dev" is used and false when "npm run build" is used to start just like in production or with vercel 
})

export default api