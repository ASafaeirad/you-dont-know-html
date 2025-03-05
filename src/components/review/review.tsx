import type { Question } from "@/questions/Question";

import { OptionWrapper } from "./option-wrapper";

interface Props {
  question: Question;
  step: number;
}

export function Review({ question, step }: Props) {
  return (
    <section>
      <div className="question text-question">
        <question.inquiry />
      </div>
      <hr className="text-border-dark my-6" />
      <ul className="flex flex-col gap-4">
        {question.options.map((option) => (
          <OptionWrapper
            key={`${question.id}-${option.id}`}
            step={step}
            option={option}
            questionId={question.id}
          />
        ))}
      </ul>
    </section>
  );
}
