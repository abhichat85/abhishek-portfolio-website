import BlogDetails from '@/components/BlogDetails'

export default function BlogPost({ params }: { params: { id: string } }) {
  return <BlogDetails id={params.id} />
}