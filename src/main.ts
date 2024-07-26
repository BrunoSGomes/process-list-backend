import app from './config/config'
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`[server]: Server is running at port ${port}`)
})
