import { TestimonialCard } from '@/components/testimonial-card'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-80">
        <TestimonialCard
          avatar="https://i.pravatar.cc/48"
          name="Sarah Dole"
          handle="@sarahdole"
          message="I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
        />
      </div>
    </main>
  )
}
