export default function Page({ params }: { params: { slug: string } }) {
    return <div>{params.slug[0].toUpperCase() + params.slug.slice(1)}</div>;
}
