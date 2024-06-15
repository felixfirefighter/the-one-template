import { BlogCard } from '@/components/blog-card'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-96">
        <BlogCard
          image="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          tag={{
            title: 'Interior',
            color: 'green',
          }}
          title="Top 5 Living Room Inspirations"
          description="Curated vibrants colors for your living, make it pop & calm in the same time."
          link={{
            text: 'Read More',
            url: '/',
          }}
        />
      </div>
    </main>
  )
}
