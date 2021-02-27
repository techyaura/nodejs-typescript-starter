import express from 'express';

const app = express();
const PORT = 8000;
app.get('/', (req,res) => res.send('Express + TypeScript Starter !!'));
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
