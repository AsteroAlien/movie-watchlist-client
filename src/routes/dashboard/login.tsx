import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>login dashboard</div>
}
