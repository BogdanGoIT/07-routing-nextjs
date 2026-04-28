type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function LearnPage(props: Props) {
  const { slug } = await props.params;
  console.log(slug[0], slug[1]);
  return <div>Learn Page</div>;
}
