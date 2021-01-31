import { Hero } from "./Hero";
import "./App.css";

export const App = () => (
  <div className="space-y-10">
    <Hero
      userId="bc73a30a-fa43-405c-9d94-ffff4d1268aa"
      image="https://images.unsplash.com/photo-1598393412376-51f81f48402f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    />
    <div className="mx-auto max-w-3xl grid gap-3 grid-cols-5">
      <Card width={3} height={2}></Card>
      <Card width={2}></Card>
      <Card width={2} height={2}></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  </div>
);

const Card = ({ children, width = 1, height = 1 }) => (
  <div
    className={`bg-white rounded-md shadow-md p-2 col-span-${width} row-span-${height}`}
    style={{ height: `${height * 8 + (height - 1) * 0.75}rem` }}
  >
    {children}
  </div>
);
