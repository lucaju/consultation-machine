'use server';

import { ContributionData } from '@/types';
import fs from 'fs';
// import { nanoid } from 'nanoid'

export const getDb = async () => {
  const db = fs.readFileSync('./db/contributions/data.json', 'utf8');
  return JSON.parse(db) as ContributionData[];
};

export const addNewContributionToDb = async (content: string) => {
  const db = fs.readFileSync('./db/contributions/data.json', 'utf8');
  const jsonDb = JSON.parse(db) as ContributionData[];

  // const id = nanoid(11);
  const id = jsonDb.length > 0 ? +jsonDb[jsonDb.length - 1].id + 1 : 1;

  const newContribution: ContributionData = {
    id: id.toString(),
    date: new Date().toISOString(),
    content,
  };

  jsonDb.push(newContribution);
  fs.writeFileSync('./db/contributions/data.json', JSON.stringify(jsonDb, null, 2));

  return newContribution;
};

export const updateContributionToDb = async (id: string, data: Partial<ContributionData>) => {
  const db = fs.readFileSync('./db/contributions/data.json', 'utf8');
  const jsonDb = JSON.parse(db) as ContributionData[];

  const jsonDbUpdated = jsonDb.map((contribution) => {
    if (contribution.id === id) return { ...contribution, ...data };
    return contribution;
  });

  fs.writeFileSync('./db/contributions/data.json', JSON.stringify(jsonDbUpdated, null, 2));
};
