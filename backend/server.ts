import { Hono } from "hono"
const app = new Hono()
app.get("/", async (c) => {
  try {
    const data = { message: "Hello API" }

    return c.json(data)

  } catch (error) {
    console.log("Error:", error)

    return c.json({ message: "Internal Server Error" }, 500)
  }
})

const server = Bun.serve({
  port: 4000,
  fetch: app.fetch
})

console.log(`🚀 Server running at ${server.url}`)