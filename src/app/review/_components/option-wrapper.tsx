import type { QuestionOption } from "@app/questions/Question";

import { questions } from "@app/questions/questions";
import { getAnswersCount, getGamesCount } from "@app/supabase/supabase";
import { isNull, percent } from "@fullstacksjs/toolbox";

import { ReviewOption } from "./review-option";

interface Props {
  option: QuestionOption;
  questionId: number;
}

export async function OptionWrapper({ option, questionId }: Props) {
  const gamesCount = await getGamesCount(questionId);
  const answersCount = await getAnswersCount(questionId, option.id);
  const correctAnswerId = questions.find(
    (q) => q.id === questionId,
  )?.correctAnswerId;

  if (isNull(correctAnswerId)) return null;

  const percentage = percent(answersCount, gamesCount);

  return (
    <li>
      <ReviewOption
        percentage={percentage}
        correctAnswerId={correctAnswerId}
        optionId={option.id}
        questionId={questionId}
      >
        <span className="text-white font-medium">
          <option.text />
        </span>
      </ReviewOption>
    </li>
  );
}
