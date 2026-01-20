import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>signup dashboard</div>
}
