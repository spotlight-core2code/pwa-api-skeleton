
---

## 3. API mit minimalem Beispiel füllen

Im Ordner `api/`:

### a) `api/src/index.ts`

```ts
import express from "express";
import { json } from "body-parser";
import { getAvailableSlots, requestSlot } from "./lib/slots-service";

const app = express();
app.use(json());

app.get("/slots/available", (req, res) => {
  const date = (req.query.date as string) ?? undefined;
  const slots = getAvailableSlots(date);
  res.json({ date, slots });
});

app.post("/slots/request", (req, res) => {
  const { name, email, slotId } = req.body;

  if (!name || !email || !slotId) {
    return res
      .status(400)
      .json({ error: "name, email and slotId are required" });
  }

  const result = requestSlot({ name, email, slotId });
  res.status(201).json(result);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});

