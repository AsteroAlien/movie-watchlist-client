import { createFileRoute } from '@tanstack/react-router'
import Signup from './../../pages/Signup';
export const Route = createFileRoute('/dashboard/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Signup/>;
}
