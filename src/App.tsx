import CarForm from '@/pages/CarForm.tsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Home from '@/pages/Home.tsx'
import RootLayout from '@/layout/RootLayout.tsx'
import Collection from '@/pages/Collection.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/car" element={<CarForm />} />
      <Route path="/collection" element={<Collection />} />
    </Route>
  )
)

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
