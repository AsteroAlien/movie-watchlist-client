import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/watchlist')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>watchlist dashboard</div>
}
