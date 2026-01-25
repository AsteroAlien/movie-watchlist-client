import { createFileRoute } from '@tanstack/react-router'
import Login from './../../pages/Login';

export const Route = createFileRoute('/dashboard/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Login/>
}
