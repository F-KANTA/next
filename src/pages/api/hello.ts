// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { db } from '@vercel/postgres';
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const client = await db.connect();

  try {
    const quetion = await client.sql`
    SELECT quetions.name,choices.choice,choices.is_answer
    FROM quetions
    INNER JOIN choices
    ON quetions.id = choices.qa_id
    WHERE quetions.id = 2;
    `;
    return response.status(200).json({ quetion });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
