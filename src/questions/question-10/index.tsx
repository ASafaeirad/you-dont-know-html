import type { Question } from "../Question";

import inquiry from "./inquiry.mdx";

export default {
  id: 10,
  inquiry,
  options: [
    { id: 1, text: () => "Blue" },
    { id: 2, text: () => "Red" },
    { id: 3, text: () => "White" },
    { id: 4, text: () => "I don't know" },
  ],
  explanation: () => "explanation question 10",
  correctAnswerId: 2,
} satisfies Question;
