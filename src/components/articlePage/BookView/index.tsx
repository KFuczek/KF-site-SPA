'use client';
import StoryView from '@/src/customComponents/storyView';

export default function BookView({
  text,
  title
}: {
  text: string;
  title: string;
}) {
  return <StoryView text={text} title={title} />;
}
