type Slot = {
  id: string;
  date: string;   // YYYY-MM-DD
  time: string;   // HH:MM
  requestedBy?: {
    name: string;
    email: string;
    requestedAt: string;
  };
};

const slots: Slot[] = [
  { id: "2025-01-10-0900", date: "2025-01-10", time: "09:00" },
  { id: "2025-01-10-1000", date: "2025-01-10", time: "10:00" },
  { id: "2025-01-11-1400", date: "2025-01-11", time: "14:00" }
];

export function getAvailableSlots(date?: string): Slot[] {
  const filtered = date ? slots.filter((s) => s.date === date) : slots;
  return filtered.filter((s) => !s.requestedBy);
}

export function requestSlot(input: {
  name: string;
  email: string;
  slotId: string;
}) {
  const slot = slots.find((s) => s.id === input.slotId);

  if (!slot) {
    return { success: false, reason: "slot_not_found" };
  }
  if (slot.requestedBy) {
    return { success: false, reason: "slot_already_requested" };
  }

  slot.requestedBy = {
    name: input.name,
    email: input.email,
    requestedAt: new Date().toISOString()
  };

  return {
    success: true,
    slot: {
      id: slot.id,
      date: slot.date,
      time: slot.time
    }
  };
}

